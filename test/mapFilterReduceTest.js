const assert = require('assert');
const lib = require('../src/mapFilterReduceLib.js');
const { 
  map, 
  filter,
  reduce,
  mapPrime
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

  it("should return an empty array when empty array is provided", function() {
    assert.deepEqual(map(incrementByOne, []),[]);
  });

  it("should return array of same length when multi-elements array is provided", function() {
    assert.deepEqual(map(incrementByOne, [1]),[2]);
    assert.deepEqual(map(incrementByOne, [1,2,3]),[2,3,4]);
    assert.deepEqual(map(append, strings), ["hey hello", "this hello"]);
    assert.deepEqual(map(changeCase, strings), ["HEY", "THIS"]);
  });
});

describe("filter", function() {
  it("should return empty array when an empty array is provided", function() {
    assert.deepEqual(filter(isEven, []),[]);
  });

  it("should collect elements for which predicate returns true value", function() {
    assert.deepEqual(filter(isEven, [1]),[]);
    assert.deepEqual(filter(isEven, [1,2,3,4,5,6]),[2,4,6]);
    assert.deepEqual(filter(isAboveThreshold(3), [1,2,3,4,5,6]),[4,5,6]);
  });
});

describe("reduce", function() {
  it("should return a reduced value when the initializer is undefined", function() {
    assert.equal(reduce(add, undefined, [1]),1);
    assert.equal(reduce(add, undefined, [1,2,3,4,5,6]),21);
    assert.equal(reduce(concat, undefined, ["h", "e", "l", "l", "o"]), "hello");
  });

  it("should return a reduced value when the initializer is defined", function() {
    assert.equal(reduce(add, 4,[1,2,3,4,5,6]), 25);
    assert.equal(reduce(add, 0, []),0);
    assert.equal(reduce(add, 2, []),2);
    assert.equal(reduce(concat, "K", ["h", "e", "l", "l", "o"]), "Khello");
  });
});

describe("map prime", function() {
 let strings = ["hey", "this"];

  it("should return an empty array when empty array is provided", function() {
    assert.deepEqual(mapPrime(incrementByOne, []),[]);
  });

  it("should return array of same length when multi-elements array is provided", function() {
    assert.deepEqual(mapPrime(incrementByOne, [1]),[2]);
    assert.deepEqual(mapPrime(incrementByOne, [1,2,3]),[2,3,4]);
    assert.deepEqual(mapPrime(append, strings), ["hey hello", "this hello"]);
    assert.deepEqual(mapPrime(changeCase, strings), ["HEY", "THIS"]);
  });
});
