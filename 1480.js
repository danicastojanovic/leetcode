var runningSum = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
      result.push((result[result.length - 1] || 0) + nums[i]);
  }
  return result;
};