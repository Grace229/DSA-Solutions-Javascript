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


// wherefore-art-thou
function whatIsInAName(collection, source) {

  // Only change code below this line
const arr = collection.filter(item => {
  for(let i in source){
    if (source[i] != item[i]){
      return false
    }
  }
  return true
})
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


// LeetCode Two Sum
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++ ){
      for(let j = i + 1; j < nums.length; j++){
          if (nums[i] + nums[j] === target ){
              return [i, j]
          }
      }
  }
};
// using hashmap
var twoSum = function(nums, target) {
  var map = {};
  for(var i = 0; i < nums.length; i++ ){
    var value = nums[i];
    var complementPair = target - value;
    if(map[complementPair] !== undefined) {
        return [map[complementPair], i];
    } else{
        map[value] = i;
    }
  }
};