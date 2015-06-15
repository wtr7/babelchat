import _ from 'lodash';

export default class Room {
    constructor(name, id, owner) {
        this.name = name || 'generalRoom';
        this.owner = owner || 'general';
        this.people = [];
        this.peopleLimit = 4;
        this.status = 'available';
        this.private = false;
        this.chatHistory = [];
    }

    addPerson(socketID) {
        if (this.status === 'available') {
            this.people.push(socketID);
        }
    }

    removePerson(socketID) {
        _.remove(this.people, socketID);
    }

    getPerson(socketID) {
        console.log(this.people, socketID);
        return person;
    }

    isAvailable() {
        return this.available === 'available';
    }

    isPrivate() {
        return this.private;
    }
}
