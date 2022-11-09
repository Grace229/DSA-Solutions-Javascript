function sumAll(arr) {
    return arr.reduce(function(firstArr, secondArr){
      let sumOfNumbers = 0;
       for(let i = Math.min(firstArr, secondArr); i <= Math.max(firstArr, secondArr); i++ )    {
           sumOfNumbers += i;
       }
      
        return sumOfNumbers;
    });
  
  }
  sumAll([1, 4]);

  function diffArray(arr1, arr2) {
    const newArr = [];
    const arrays = arr1.concat(arr2)
    
   arrays.filter((item) => {
      if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
        return newArr.push(item);
      }
    });
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  // Seek and Destroy
function destroyer(arr) {
  const argument = Array.from(arguments);
  
  const answer = argument.shift().filter(function (value) {
    if (argument.indexOf(value) < 0) {
      return true;
    }
  });   
  return answer;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


