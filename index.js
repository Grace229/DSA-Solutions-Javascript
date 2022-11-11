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

// leetcode lengthOfLongestSubstring

var lengthOfLongestSubstring = function(s) {
  let max = 0
  let begin = 0
  let map = {}

  for(let end = 0; end < s.length; end++){
      if(map[s[end]] !== undefined && map[s[end]] >= begin){
          begin = map[s[end]] + 1
      }
      map[s[end]] = end
      max = Math.max(max, end - begin + 1)
  }
  return max
};

// find the duplicate number LeetCode
var findDuplicate = function(nums) {
  var result = [];
  for(var i = 0; i < nums.length; i++){
      var value =  Math.abs(nums[i]);
      var index = value - 1;
      if(nums[index] < 0){
          result.push(value)
      }else{
          nums[index] *= -1;
      }
  }
  return result;
};

// 3Sums Leetcode
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const results = [];
  for(let i = 0; i < nums.length; i++){
      if(i > 0 && nums[i] === nums[i - 1]) continue;
      const target = 0 - nums[i];
      let left = i + 1;
      let right = nums.length - 1;
      while(right > left){
          const sum = nums[left] + nums[right];
          if(sum > target){
              right--;
          }else if(sum < target){
              left++;
          }else{
              results.push([nums[i], nums[left], nums[right]]);
              while(nums[left] === nums[left + 1]) left++;
              while(nums[right] === nums[right - 1]) right--;
           left++;
           right--;
          }
      }
  }
  return results
};
// Leet Code Remove Duplicate from Sorted array
var removeDuplicates = function (nums) {
  const numsLength = nums.length;

  if (numsLength === 0) {
    return 0;
  }

  let j = 1;
  for (let i = 0; i < numsLength - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[j] = nums[i + 1];
      j++;
    }
  }

  return j;
};
// Best Time to buy stock LeetCode
var maxProfit = function(prices) {
  let minBuyPrice = prices[0]
  let max = 0
   for(let i = 1; i < prices.length; i++){
       const sellPrice = prices[i]
       const profit = sellPrice-minBuyPrice
       max=Math.max(max, profit)
       minBuyPrice=Math.min(minBuyPrice, prices[i])
   }
   return max
};

// Add two numbers leetccode
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let previousNode = new ListNode();
  const headNode = previousNode;
  while (l1 || l2 || carry) {
    let val1 = 0;
    let val2 = 0;
    if (l1) {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val2 = l2.val;
      l2 = l2.next;
    }
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10); // sum > 9 ? 1 : 0
    const digit = sum % 10;
    const currentNode = new ListNode(digit);
    previousNode.next = currentNode;
    previousNode = currentNode;
  }
  return headNode.next;

};