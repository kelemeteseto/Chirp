var window = window || undefined;

if (window) {
  GLOBAL = window;
} else {
  var fs = require('fs');
  var vm = require('vm');
  var sinon = require('sinon');
  var chai = require('chai');
  var functionsFile = fs.readFileSync(process.cwd() + '/chirp.js');
  vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL
}

var expect = chai.expect;
var should = chai.should();

describe("Main", function() {
  var sandbox;

  beforeEach(function() {
    // create a sandbox
    sandbox = sinon.sandbox.create();

  });

  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });

  describe('#numberOfChirps', function () {
    it("should be a function", function() {
      (typeof GLOBAL.numberOfChirps).should.equal("function");
    });

    it("should return numberOfChirps based on input", function() {
      var chirpNum = GLOBAL.numberOfChirps(5);
      expect(chirpNum).to.be.a("string");
      expect(chirpNum).to.equal("chirp chirp chirp chirp chirp");

      chirpNum = GLOBAL.numberOfChirps(3);
      expect(chirpNum).to.be.a("string");
      expect(chirpNum).to.equal("chirp chirp chirp");

      chirpNum = GLOBAL.numberOfChirps(3.14);
      expect(chirpNum).to.be.a("string");
      expect(chirpNum).to.equal("Please enter a positive integer");
    });

  });


});