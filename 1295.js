var findNumbers = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      let currentLength = (nums[i] + '').length;
      if (currentLength % 2 === 0) {
          count++;
      }
  }
  return count;
};