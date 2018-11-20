const assert = require('assert');
const lib = require('./arrayFunctions');
const { 
  map, 
} = lib;

const incrementByOne = function(number) {
  return ++number;
}

const testMap = function() {
  assert.deepEqual(map([],incrementByOne),[]);
  assert.deepEqual(map([1],incrementByOne),[2]);
  assert.deepEqual(map([1,2,3],incrementByOne),[2,3,4]);
  assert.deepEqual(map([-1,-2,-3],incrementByOne),[0,-1,-2]);
}

testMap();
