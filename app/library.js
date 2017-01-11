'use strict'

var file = {}


file.findMissing = function(arr1,arr2){
  if(arr1.length === 0 || arr2.length === 0){
    return 0;
  }else if(arr1.length === arr2.length){
    return 0;
  }else if(arr1.length < arr2.length){
    //var missingNumber;
    var missingNumber = [];
    var joined = arr1.concat(arr2);
    for(var i = 0; i < joined.length; i++ ) {
        var current = joined[i];
        if( joined.indexOf(current) == joined.lastIndexOf(current) ) {
          missingNumber.push(current);
        }
      }
      return missingNumber[0];
  }
}


module.exports = file;
