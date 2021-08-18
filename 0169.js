var majorityElement = function(nums) {
  let count = {};
  let majority = Math.floor(nums.length/2) + 1;
  for (let i = 0; i < nums.length; i++) {
      if (count[nums[i]] == undefined) {
          count[nums[i]] = 1;
      } else {
          count[nums[i]] += 1;
      }
      if (count[nums[i]] === majority) {
          return nums[i];
      }
  }
};