var smallerNumbersThanCurrent = function(nums) {
  let sortedNums = nums.slice().sort(function(a, b) {
return a - b;
  });
  let cache = {};
  for (let i = 0; i < sortedNums.length; i++) {
      if (cache[sortedNums[i]] == undefined) {
          cache[sortedNums[i]] = i;
      }
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
      result.push(cache[nums[i]]);
  }
  return result;
};