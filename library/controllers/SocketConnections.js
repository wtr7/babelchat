import Room from './../libs/Room.js';
import _ from 'lodash';

export default class SocketConnections {
  	constructor(io) {
  		// set general defaultRoom first time
  		this.defaultRoom = new Room();
  		/* in the future we can use 'Map' instead of an object literal
  		then we can use features like remove and clear*/
  		this.rooms = {
  			'generalRoom': this.defaultRoom
  		};
		this.io = io;
		// arr with all sockets
		this.sockets = [];
		// people keys are the socket ids
		this.people = {};
	}

  	listen() {
    	this.io.sockets.on('connection', socket => {
    		socket.on('joinserver', (name, device) => {
	    		this.people[socket.id] = {'name' : name, 'device': device};

	    		// join defaultRoom and set defaultRoom on socket
	    		socket.room = this.defaultRoom.name;
	    		this.rooms[this.defaultRoom.name].addPerson(socket.id);

	    		socket.join(this.defaultRoom.name);
	    		this.sockets.push(socket);

	    		// send back to joined user
				socket.emit('update', 'You have connected to the server.');
				// send to all
				this.io.sockets.emit('update', `${this.people[socket.id].name} is online.`);
				// update all sockets with current peopleSize
				this.io.sockets.emit('update-people', {people: this.people, count: _.size(this.people)});
			});

			socket.on('send', (msTime, msg) => {
				this.io.sockets.in(socket.room).emit('chat', msTime, this.people[socket.id], msg);

				if (_.size(this.rooms[socket.room].chatHistory) > 10) {
					this.rooms[socket.room].chatHistory.splice(0, 1);
				} else {
					this.rooms[socket.room].chatHistory.push(this.people[socket.id].name + ': ' + msg);
				}
			});

			socket.on('disconnect', () => {
				if (!_.find(this.sockets, socket)) return console.log('No name provided yet');

				this.io.sockets.emit('update', `${this.people[socket.id].name} has disconnected from the server.`);

				if (_.contains(this.rooms[socket.room].people, socket.id)) {
					//socket leave room
					socket.leave(socket.room);
					this.rooms[socket.room].removePerson(socket.id);
				}

				delete this.people[socket.id];
				this.io.sockets.emit('update-people', {people: this.people, count: _.size(this.people)});

				// let is, compared to var, block scoped and not function scoped
				let o = _.findWhere(this.sockets, {'id': socket.id});
				this.sockets = _.without(this.sockets, o);
			});
    	});
  	}
}