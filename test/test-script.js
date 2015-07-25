var window = window || undefined;

if (window) {
  GLOBAL = window;
} else {
  var fs = require('fs');
  var vm = require('vm');
  var sinon = require('sinon');
  var chai = require('chai');
  var functionsFile = fs.readFileSync(process.cwd() + '/functions.js');
  vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL
}

var expect = chai.expect;
var should = chai.should();

describe("Main", function() {
  var sandbox;

  beforeEach(function() {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some console methods
    sandbox.stub(console, "log");
    sandbox.stub(console, "error");
  });

  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });

  describe('#numberOfChirps', function () {
    it("should be a function", function() {
      (typeof GLOBAL.chirp).should.equal("function");
    });

    it("should return chirp based on the input", function() {

    });

  });


});