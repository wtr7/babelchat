import _ from 'lodash';

export default class Room {
    // you can add default values to the params
    constructor(name = 'generalRoom', owner = 'general') {
        this.name = name;
        this.owner = owner;
        /* in the future we can use 'Set' instead of an Array
        then we can use features like remove and clear*/
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
