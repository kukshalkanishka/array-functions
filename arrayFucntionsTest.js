const assert = require('assert');
const lib = require('./arrayFunctions');
const { 
  map, 
  filter,
  reduce
} = lib;

const incrementByOne = function(number) {
  return ++number;
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

const testMap = function() {
  assert.deepEqual(map(incrementByOne, []),[]);
  assert.deepEqual(map(incrementByOne, [1]),[2]);
  assert.deepEqual(map(incrementByOne, [1,2,3]),[2,3,4]);
  assert.deepEqual(map(incrementByOne, [1,2,3]),[2,3,4]);
  assert.deepEqual(map(incrementByOne, [-1,-2,-3]),[0,-1,-2]);
  assert.deepEqual(map(append, ["hey", "this"]), ["hey hello", "this hello"]);
  console.log("map function test passed");
}

const testFilter = function() {
  assert.deepEqual(filter(isEven, []),[]);
  assert.deepEqual(filter(isEven, [1]),[]);
  assert.deepEqual(filter(isEven, [1,2,3,4,5,6]),[2,4,6]);
  assert.deepEqual(filter(isEven, [-1,-2,-3,-4,-5,-6]),[-2,-4,-6]);
  console.log("filter function test passed");
}

const testReduce = function() {
  assert.equal(reduce(add, [1]),1);
  assert.equal(reduce(add, [1,2,3,4,5,6]),21);
  assert.equal(reduce(add, [1,2,3,4,5,6], 4), 25);
  console.log("reduce function test passed");
}

testMap();
testFilter();
testReduce();
