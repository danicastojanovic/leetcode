/*
554. Brick Wall

There is a rectangular brick wall in front of you with n rows of bricks. The ith row has some number of bricks each of the same height (i.e., one unit) but they can be of different widths. The total width of each row is the same.

Draw a vertical line from the top to the bottom and cross the least bricks. If your line goes through the edge of a brick, then the brick is not considered as crossed. You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.

Given the 2D array wall that contains the information about the wall, return the minimum number of crossed bricks after drawing such a vertical line.



Example 1:


Input: wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]
Output: 2
Example 2:

Input: wall = [[1],[1],[1]]
Output: 3


Constraints:

n == wall.length
1 <= n <= 104
1 <= wall[i].length <= 104
1 <= sum(wall[i].length) <= 2 * 104
sum(wall[i]) is the same for each row i.
1 <= wall[i][j] <= 231 - 1

*/

/**
 * @param {number[][]} wall
 * @return {number}
 */
// Timeout: because I iterate over every index of every row
// var leastBricks = function(wall) {
//     let hashmap = [];
//     for (let i = 0; i < wall.length; i++) {
//         let key = 1;
//         for (let j = 0; j < wall[i].length; j++) {
//             let brick = wall[i][j];
//             while (brick > 1) {
//                 hashmap[key] = hashmap[key] ? hashmap[key] += 1 : 1;
//                 brick -= 1;
//                 key += 1;
//             }
//             key += 1;
//         }
//     }
//     let min = wall.length;
//     hashmap.forEach(count => {
//         if (count > 0 && count < min) {
//             min = count;
//         }
//     })
//     return min;
// };
// Array still times out
// var leastBricks = function(wall) {
//     let hashmap = [];
//     for (let i = 0; i < wall.length; i++) {
//         let sum = 0;
//         for (let j = 0; j < wall[i].length - 1; j++) {
//             sum += wall[i][j];
//             hashmap[sum] = hashmap[sum] ? hashmap[sum] += 1 : 1;
//         }
//     }
//     let max = 0;
//     for (let i = 0; i < hashmap.length; i++) {
//         if (hashmap[i] > max) {
//             max = hashmap[i];
//         }
//     }
//     return wall.length - max;
// }
// But for some reason, a Map doesn't (taken from discussion)
var leastBricks = function(wall) {
  let freq = new Map(), best = 0
  for (let i = 0; i < wall.length; i++) {
      let row = wall[i], rowSum = row[0]
      for (let j = 1; j < row.length; j++) {
          freq.set(rowSum, (freq.get(rowSum) || 0) + 1)
          rowSum += row[j]
      }
  }
  for (let [k,v] of freq)
      if (v > best) best = v
  return wall.length - best
};