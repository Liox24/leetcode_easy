// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }

//   return null;
// };

// const number = [9, 2, 4, 0];
// const target = 9;

// const result = twoSum(number, target);
// console.log(result);

// // Second approach

var twoSum = function (nums, target) {
  let numToIndexMap = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (numToIndexMap.hasOwnProperty(diff)) {
      return [ numToIndexMap[diff],i];
    }

    numToIndexMap[nums[i]] = i;
  }

  return null;
};

const number = [3,2,4];
const target = 6;

const result = twoSum(number, target);
console.log(result);
