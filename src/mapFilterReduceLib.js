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

  if(initializer || initializer == 0){
    result = initializer;
    position = 0;
  }

  while(position < elements.length){
    result = reducer(result, elements[position]);
    position++;
  }

  return result;
}

const mapPrime = function(mapper, elements) {

  const reducer = function(initializer, element) {
    initializer.push(mapper(element));
    return initializer;
  }

  let result = reduce(reducer, [], elements);
  return result;
}

module.exports = {
  map,
  filter,
  reduce,
  mapPrime,
}
