/*287. Find the Duplicate Number
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [1,1]
Output: 1
Example 4:

Input: nums = [1,1,2]
Output: 1


Constraints:

1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.


Follow up:

How can we prove that at least one duplicate number must exist in nums?
Can you solve the problem in linear runtime complexity?

*/

var findDuplicate = function(nums) {
  let low = 1
  let high = nums.length - 1;
  let duplicate = -1;
  debugger;
  while (low <= high){
      let count = 0
      const mid = Math.floor(low + (high-low) / 2)
      for (let num of nums){
          if (num <= mid){
              count++
          }
      }
      if (count <= mid){
          low = mid + 1;
      }
      else {
          high = mid - 1;
          duplicate = mid;
      }
  }
  return duplicate;

};

// turtle and rabbit O(n)
var findDuplicate = function(nums) {
  let tortoise = nums[0];
  let hare = nums[0];

  do {
      tortoise = nums[tortoise];
      hare = nums[nums[hare]];
  } while (tortoise !== hare);

  tortoise = nums[0];
  while (tortoise !== hare) {
      tortoise = nums[tortoise];
      hare = nums[hare];
  }
  return hare;
}