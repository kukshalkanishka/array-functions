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

module.exports = {
  map,
  filter
}
 
