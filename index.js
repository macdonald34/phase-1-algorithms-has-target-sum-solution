function hasTargetSum(array, target) {
  // Write your algorithm here
  console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
console.log(hasTargetSum([1, 2, 3, 4, 5], 10)); // true
console.log(hasTargetSum([5, 10, 15, 20], 25)); // true
console.log(hasTargetSum([-1, 0, 1], 0)); // true
console.log(hasTargetSum([4]))

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/
function hasTargetSum(nums, target) {
  const seenNumbers = new Set();

  for (let num of nums) {
    const difference = target - num;

    if (seenNumbers.has(difference)) {
      return true;
    }

    seenNumbers.add(num);
  }

  return false;
}
/*
  Add written explanation of your solution here
  The provided solution is already quite efficient, with a time complexity of O(n) where n is the length of the array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;