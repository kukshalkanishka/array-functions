const map = function(elements, mapper){
  let processedElements = [];
  for(element of elements){
    processedElements.push(mapper(element));
  }
  return processedElements;
}

const filter = function(elements, predicate) { 
  let processedElements = [];
  for(element of elements){
    if(predicate(element)) {
    processedElements.push(element);
    }
  }
  return processedElements;
}

const reduce = function(elements, reducer, initializer) {
  let result = elements[0];
  let position = 1;

  if(initializer){
    result = initializer;
    position = 0;
  }

  while(position < elements.length){
    result = reducer(result, elements[position]);
    position++;
  }

  return result;
}

module.exports = {
  map,
  filter,
  reduce
}
 
