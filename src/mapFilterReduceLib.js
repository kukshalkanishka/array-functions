const map = function(mapper, elements){
  let processedElements = [];
  for(element of elements){
    processedElements.push(mapper(element));
  }
  return processedElements;
}

const filter = function(predicate, elements) { 
  let processedElements = [];
  for(element of elements){
    if(predicate(element)) {
    processedElements.push(element);
    }
  }
  return processedElements;
}

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

const predicateGenerater = function(predicate) {
  return function(initializer, element) {
    if(predicate(element)) {
      initializer.push(element);
    }
    return initializer;
  }
}

const filterPrime= function(predicate, elements) {
  let result = reduce(predicateGenerater(predicate), [], elements);
  return result;
}

module.exports = {
  map,
  filter,
  reduce,
  mapPrime,
  filterPrime
}
