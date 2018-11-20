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

const changeCase = function(element) {
  return element.toUpperCase();
}

const isEven = function(number) {
  return number % 2 === 0;
}

const add = function(num1, num2) {
  return num1 + num2;
}

const append = function(string) {
  return string + " " + "hello";
}

const isAboveThreshold = function(number) {
  return number > 3;
}

const concat = function(element1, element2) {
  return element1 + element2;
}

const testMap = function() {
  assert.deepEqual(map(incrementByOne, []),[]);
  assert.deepEqual(map(incrementByOne, [1]),[2]);
  assert.deepEqual(map(incrementByOne, [1,2,3]),[2,3,4]);
  assert.deepEqual(map(append, ["hey", "this"]), ["hey hello", "this hello"]);
  assert.deepEqual(map(changeCase, ["hey", "this"]), ["HEY", "THIS"]);
  console.log("map function test passed");
}

const testFilter = function() {
  assert.deepEqual(filter(isEven, []),[]);
  assert.deepEqual(filter(isEven, [1]),[]);
  assert.deepEqual(filter(isEven, [1,2,3,4,5,6]),[2,4,6]);
  assert.deepEqual(filter(isAboveThreshold, [1,2,3,4,5,6]),[4,5,6]);
  console.log("filter function test passed");
}

const testReduce = function() {
  assert.equal(reduce(add, undefined, [1]),1);
  assert.equal(reduce(add, undefined, [1,2,3,4,5,6]),21);
  assert.equal(reduce(add, 4,[1,2,3,4,5,6]), 25);
  assert.equal(reduce(concat, undefined, ["h", "e", "l", "l", "o"]), ["hello"]);
  assert.equal(reduce(concat, "K", ["h", "e", "l", "l", "o"]), ["Khello"]);
  console.log("reduce function test passed");
}

testMap();
testFilter();
testReduce();
