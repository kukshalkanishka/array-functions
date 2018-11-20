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
