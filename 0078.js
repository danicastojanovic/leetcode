var subsets = function(nums) {
  let result = [[]];
  let current = [];
  let backtrack = function(nums) {
      if (nums.length === 0) {
          return;
      }
      for (let i = 0; i < nums.length; i++) {
        current.push(nums[i]);
        result.push(current.slice());
        backtrack(nums.slice(i + 1));
        current.pop();
      }
  }
  backtrack(nums);
return result;
};