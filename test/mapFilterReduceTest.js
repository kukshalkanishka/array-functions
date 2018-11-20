const assert = require('assert');
const lib = require('../src/mapFilterReduceLib.js');
const { 
  map, 
  filter,
  reduce
} = lib;

const incrementByOne = function(number) {
  return ++number;
}

const append = function(string) {
  return string + " " + "hello";
}

const changeCase = function(element) {
  return element.toUpperCase();
}

const isEven = function(number) {
  return number % 2 === 0;
}

const add = function(num1, num2) {
  return num1 + num2;
}

const isAboveThreshold = function(threshold) {
  return function(number){
    return number > threshold;
  }
}

const concat = function(element1, element2) {
  return element1 + element2;
}

describe("map", function() {
  let strings = ["hey", "this"];

  it("should return empty array", function() {
    assert.deepEqual(map(incrementByOne, []),[]);
  });

  it("should increment each element by one", function() {
    assert.deepEqual(map(incrementByOne, [1]),[2]);
    assert.deepEqual(map(incrementByOne, [1,2,3]),[2,3,4]);
  });

  it("should append hello to each strings", function() {
    assert.deepEqual(map(append, strings), ["hey hello", "this hello"]);
  });

  it("should change case of strings to upper case", function() {
    assert.deepEqual(map(changeCase, strings), ["HEY", "THIS"]);
  });

});

describe("filter", function() {
  it("should return empty array", function() {
    assert.deepEqual(filter(isEven, []),[]);
  });

  it("should return even an array of even numbers", function() {
    assert.deepEqual(filter(isEven, [1]),[]);
    assert.deepEqual(filter(isEven, [1,2,3,4,5,6]),[2,4,6]);
  });

  it("should return an array of numbers above a threshold", function() {
    assert.deepEqual(filter(isAboveThreshold(3), [1,2,3,4,5,6]),[4,5,6]);
  });

});

describe("reduce", function() {
  it("should return the sum of elements of an array", function() {
    assert.equal(reduce(add, undefined, [1]),1);
    assert.equal(reduce(add, undefined, [1,2,3,4,5,6]),21);
  });

  it("should add all elements allong with initial value", function() {
    assert.equal(reduce(add, 4,[1,2,3,4,5,6]), 25);
  });

  it("should concat all the elements", function() {
    assert.equal(reduce(concat, undefined, ["h", "e", "l", "l", "o"]), "hello");
    assert.equal(reduce(concat, "K", ["h", "e", "l", "l", "o"]), "Khello");
  });
});


