// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    const ans = new Array();
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                ans.push(i);
                ans.push(j);
                return ans;
            }
        }
    }
    return ans;
};

// Time Complexity:O(n^2);
// Space Complexity :O(1);

console.log(twoSum([2, 7, 11, 15], 9))

var twoSum = function (nums, target) {

    const myMap = new Map();
    const ans = new Array();
    for (let i = 0; i < nums.length; i++) {
        const findNumber = target - nums[i];
        if (myMap.has(findNumber)) {
            ans.push(i);
            ans.push(myMap.get(findNumber));
            return ans;
        }
        myMap.set(nums[i], i);
    }
    return ans;

};
console.log(twoSum([3, 1, 3], 6))
//Time Complexity:O(n);
//Space Complexity:O(n)


