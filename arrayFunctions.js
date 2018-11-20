const map = function(elements, module){
  let processedElements = [];
  for(element of elements){
    processedElements.push(module(element));
  }
  return processedElements;
}

module.exports = {
  map
}
 
