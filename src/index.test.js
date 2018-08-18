var should = require('should');
var tm = require('./index.js');

describe("Testing utilities for typing mania", () => {
    it("Should exist.", () => {
        tm.should.exists;
    });
    
    it("Should generate random letter#1", () => {
        var word = tm.generateWord(1,4);
        word.length.should.be.above(0);
        word.length.should.be.below(5);
    });

    it("Should generate random letter#2", () => {
        var word = tm.generateWord(1,4);
        word.length.should.be.above(0);
        word.length.should.be.below(5);
    });

    it("Should generate random letter#3", () => {
        var word = tm.generateWord(1,4);
        word.length.should.be.above(0);
        word.length.should.be.below(5);
    });
});
