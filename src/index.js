
exports.min = function min(array) {
  let variable;

  if ( Array.isArray(array) && array.length > 0 ) {
   variable = array[0];
  }
  else return 0;

  array.forEach( function f(element, index, arr) {
       variable = (variable > element ? element: variable); 
  });
  return variable;
}



exports.max = function max (array) {
  let variable;

  if ( Array.isArray(array) && array.length > 0 ) {
      variable = array[0];
   }
  else return 0;

  array.forEach( function f(element, index, arr) {
      variable = (variable < element ? element: variable);  
  });
  return variable;
}






exports.avg = function avg (array) {
    let max;
    let variable;
    let sum = 0;

    if ( !( Array.isArray(array) && array.length > 0 ) ) 
      return 0;
    
  

    
    array.forEach( function f(element, index, arr) {
        sum += element;  
    }); 
    

     return  sum / array.length;
}






  
  
  
  
//console.log(exports.min([27,27,-4,-10,17,34,-26,-4,19,22,34,14,5,20,-23,-1,-35,25,2,-35]));
  

  
  
