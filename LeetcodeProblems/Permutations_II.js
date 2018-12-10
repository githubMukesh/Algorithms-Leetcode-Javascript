/*
Permutations II
https://leetcode.com/problems/permutations-ii/

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

var permuteUnique = function(nums) {
  var map = {};
  for(var i = 0; i < nums.length; i++) {
      var value = nums[i];
      map[value] = (map[value]) ? map[value] + 1 : 1;
  }
  
  return permuteUniqueAux(nums.length, map, []);
};

var permuteUniqueAux = function(n, map, currentSol) {
  if(currentSol.length === n) {
    return [currentSol];
  }

  var ret = [];
  var set = new Set();
  for(var num in map) {
    if(!set.has(num)) {
      const occ = map[num];
      if(occ === 1) {
        delete map[num];
      } else {
        map[num] = occ -1 ;
      }
      ret = [...ret, ...permuteUniqueAux(n, map, currentSol.concat(num))];
      map[num] = occ;
    }
  }

  return ret;
};

var main = function() {
  console.log(permuteUnique([1,1,2]));
  console.log(permuteUnique([1,3,2,1]));
  console.log(permuteUnique([]));
  console.log(permuteUnique([1,1]));
}

module.exports.main = main;