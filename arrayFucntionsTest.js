const assert = require('assert');
const lib = require('./arrayFunctions');
const { 
  map, 
  filter
} = lib;

const incrementByOne = function(number) {
  return ++number;
}

const isEven = function(number) {
  return number % 2 === 0;
}

const testMap = function() {
  assert.deepEqual(map([],incrementByOne),[]);
  assert.deepEqual(map([1],incrementByOne),[2]);
  assert.deepEqual(map([1,2,3],incrementByOne),[2,3,4]);
  assert.deepEqual(map([-1,-2,-3],incrementByOne),[0,-1,-2]);
}

const testFilter = function() {
  assert.deepEqual(filter([],isEven),[]);
  assert.deepEqual(filter([1],isEven),[]);
  assert.deepEqual(filter([1,2,3,4,5,6],isEven),[2,4,6]);
  assert.deepEqual(filter([-1,-2,-3,-4,-5,-6],isEven),[-2,-4,-6]);
}

testMap();
testFilter();
