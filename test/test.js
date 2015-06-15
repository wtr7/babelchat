var Cat = require('./../libs/Cat');
var Animal = require('./../libs/Animal');
var chai = require('./../node_modules/chai');
var should = require('./../node_modules/chai').should();
var mocha = require('./../node_modules/mocha');

var patrick = new Animal();
patrick.walk();
patrick.pat();

console.log(patrick);

var poes = new Cat('poes');
for (var key in poes) {
	//if (poes.hasOwnProperty(key)) {
		//console.log(key);	
	//}
}

// describe('Creating of an animal and the cat', function() {

// 	it('should have the name poes', function(done) {
// 		poes.getName().should.equal('poes');
// 		done();
// 	});	

// 	it('should have the correct length of 4', function(done) {
// 		poes.getName().should.have.length(4);
// 		done();
// 	});

// 	it('should have the name poes', function(done) {
// 		poes.getName().should.equal('poes');
// 		done();
// 	});	

// });

