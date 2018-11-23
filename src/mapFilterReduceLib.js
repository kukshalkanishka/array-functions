const reduce = function(reducer, initializer, elements) {
  let result = elements[0];
  let position = 1;

  if(initializer != undefined){
    result = initializer;
    position = 0;
  }

  while(position < elements.length){
    result = reducer(result, elements[position]);
    position++;
  }

  return result;
}

const reducerGenerater = function(mapper){
  return function(initializer, element) {
    initializer.push(mapper(element));
    return initializer;
  }
}

const mapPrime = function(mapper, elements) {
  let result = reduce(reducerGenerater(mapper), [], elements);
    return result;
}

const reducerPrimeGenerater = function(predicate) {
  return function(initializer, element) {
    if(predicate(element)) {
      initializer.push(element);
    }
    return initializer;
  }
}

const filterPrime= function(predicate, elements) {
  let result = reduce(reducerPrimeGenerater(predicate), [], elements);
  return result;
}

const recursiveMap = function(mapper, elements, currentResult = []){
  if(elements.length == 0) {
    return currentResult;
  }
  return recursiveMap(mapper, 
    elements.slice(1), 
    currentResult.concat([mapper(elements[0])]));
}

const filterTruthyElement = function(predicate, element) {
  if(predicate(element)){
    return [element];
  }
  return;
}

const recursiveFilter = function(predicate, elements, currentResult = []) {
  if(elements.length == 0) {
    return currentResult;
  }
  return recursiveFilter(predicate, elements.slice(1),
    (filterTruthyElement(predicate, elements[0]) && 
      currentResult.concat(filterTruthyElement(predicate, elements[0]))
    ) ||
    currentResult);
}

module.exports = {
  reduce,
  mapPrime,
  filterPrime,
  recursiveMap,
  recursiveFilter
}
