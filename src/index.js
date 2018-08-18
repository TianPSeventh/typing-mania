"use strict";

var randomstring = require('randomstring');

const fellWord = () => {};
const inputAndHighlight = () => {};
const checkWord = () => {};
const clearHighlight = () => {};
const removeWord = () => {};
const addScore = () => {};
const generateWord = (min, max) => {
    var length = Math.random() * (max - min) + min;

    return randomstring.generate({
        length,
        charset: 'abc'
    });
};
const placeWord = () => {};
const increaseSpeed = () => {};
const stopGame = () => {};
const runGameEngine = () => {};

module.exports = {
    fellWord, 
    inputAndHighlight, 
    checkWord, 
    clearHighlight, 
    removeWord, 
    addScore,
    generateWord,
    placeWord,
    increaseSpeed,
    stopGame,
    runGameEngine
}