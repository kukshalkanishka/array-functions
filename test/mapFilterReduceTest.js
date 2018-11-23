const assert = require('assert');
const { 
  reduce,
  mapPrime,
  filterPrime,
  recursiveMap,
  recursiveFilter
}= require('../src/mapFilterReduceLib.js');

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

describe("reduce", function() {
  it("should return a reduced value when the initializer is undefined", function() {
    assert.equal(reduce(add, undefined, [1]),1);
    assert.equal(reduce(add, undefined, [1,2,3,4,5,6]),21);
    assert.equal(reduce(concat, undefined, ["h", "e", "l", "l", "o"]), "hello");
  });

  it("should return identical array when array is an empty array with initializer", function() {
    assert.equal(reduce(add, 0, []),0);
    assert.equal(reduce(add, 2, []),2);
  });

  it("should return a reduced value when the initializer is defined", function() {
    assert.equal(reduce(add, 4,[1,2,3,4,5,6]), 25);
    assert.equal(reduce(concat, "K", ["h", "e", "l", "l", "o"]), "Khello");
  });
});

describe("map prime", function() {

  it("should return an empty array when empty array is provided", function() {
    assert.deepEqual(mapPrime(incrementByOne, []),[]);
  });

  it("should return single element when a single element array is passed", function() {
    assert.deepEqual(mapPrime(incrementByOne, [1]),[2]);
  });

  it("should return array of same length when multi-elements array is provided", function() {
    let strings = ["hey", "this"];
    assert.deepEqual(mapPrime(incrementByOne, [1,2,3]),[2,3,4]);
    assert.deepEqual(mapPrime(append, strings), ["hey hello", "this hello"]);
    assert.deepEqual(mapPrime(changeCase, strings), ["HEY", "THIS"]);
  });
});

describe("filterPrime", function() {
  it("should return empty array when an empty array is provided", function() {
    assert.deepEqual(filterPrime(isEven, []),[]);
  });

  it("should return empty array when predicate returns falsy value for every element", function() {
    assert.deepEqual(filterPrime(isEven, [1,3,5]),[]);
  });

  it("should return identical array when predicate returns true value for every element", function() {
    assert.deepEqual(filterPrime(isEven, [2,4,6]),[2,4,6]);
  });

  it("should collect elements for which predicate returns true value", function() {
    assert.deepEqual(filterPrime(isEven, [1]),[]);
    assert.deepEqual(filterPrime(isAboveThreshold(3), [1,2,3,4,5,6]),[4,5,6]);
  });
});

describe.skip("recursive recursiveReduce", function() {
  it("should return a recursiveReduced value when the initializer is undefined", function() {
    assert.equal(recursiveReduce(add, undefined, [1]),1);
    assert.equal(recursiveReduce(add, undefined, [1,2,3,4,5,6]),21);
    assert.equal(recursiveReduce(concat, undefined, ["h", "e", "l", "l", "o"]), "hello");
  });

  it("should return identical array when array is an empty array with initializer", function() {
    assert.equal(recursiveReduce(add, 0, []),0);
    assert.equal(recursiveReduce(add, 2, []),2);
  });

  it("should return a recursiveReduced value when the initializer is defined", function() {
    assert.equal(recursiveReduce(add, 4,[1,2,3,4,5,6]), 25);
    assert.equal(recursiveReduce(concat, "K", ["h", "e", "l", "l", "o"]), "Khello");
  });

});

describe("recursiveMap", function() {
  let strings = ["hey", "this"];

  it("should return an empty array when empty array is provided", function() {
    assert.deepEqual(recursiveMap(incrementByOne, []),[]);
  });

  it("should return single element when a single element array is passed", function() {
    assert.deepEqual(recursiveMap(incrementByOne, [1]),[2]);
  });

  it("should return array of same length when multi-elements array is provided", function() {
    assert.deepEqual(recursiveMap(incrementByOne, [1,2,3]),[2,3,4]);
    assert.deepEqual(recursiveMap(append, strings), ["hey hello", "this hello"]);
    assert.deepEqual(recursiveMap(changeCase, strings), ["HEY", "THIS"]);
  });

});

describe("recursiveFilter", function() {
  it("should return empty array when an empty array is provided", function() {
    assert.deepEqual(recursiveFilter(isEven, []),[]);
  });

  it("should return empty array when predicate returns falsy value for every element", function() {
    assert.deepEqual(recursiveFilter(isEven, [1,3,5]),[]);
  });

  it("should return identical array when predicate returns true value for every element", function() {
    assert.deepEqual(recursiveFilter(isEven, [2,4,6]),[2,4,6]);
  });

  it("should collect elements for which predicate returns true value", function() {
    assert.deepEqual(recursiveFilter(isEven, [1]),[]);
    assert.deepEqual(recursiveFilter(isAboveThreshold(3), [1,2,3,4,5,6]),[4,5,6]);
  });
});


