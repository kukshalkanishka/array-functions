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
const testMap = function() {
  assert.deepEqual(map([],incrementByOne),[]);
  assert.deepEqual(map([1],incrementByOne),[2]);
  assert.deepEqual(map([1,2,3],incrementByOne),[2,3,4]);
  assert.deepEqual(map([-1,-2,-3],incrementByOne),[0,-1,-2]);
  console.log("map function test passed");
}

const testFilter = function() {
  assert.deepEqual(filter([],isEven),[]);
  assert.deepEqual(filter([1],isEven),[]);
  assert.deepEqual(filter([1,2,3,4,5,6],isEven),[2,4,6]);
  assert.deepEqual(filter([-1,-2,-3,-4,-5,-6],isEven),[-2,-4,-6]);
  console.log("filter function test passed");
}

const testReduce = function() {
  assert.equal(reduce([1], add),1);
  assert.equal(reduce([1,2,3,4,5,6], add),21);
  assert.equal(reduce([1,2,3,4,5,6], add, 4), 25);
  console.log("reduce function test passed");
}

testMap();
testFilter();
testReduce();
