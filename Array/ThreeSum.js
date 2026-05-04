/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumBruteforce = function (nums) {
    const ans = [];
    let seen = new Set();
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if ((nums[i] + nums[j] + nums[k]) === 0) {
                    let triplet = [nums[i], nums[j], nums[k]];
                    triplet.sort((a, b) => a - b);

                    console.log(triplet);

                    let key = triplet.join(",")

                    if (!seen.has(key)) {
                        seen.add(key);
                        ans.push(triplet)

                    }
                }
            }
        }
    }
    return ans;
}
var threeSumOptimized = function (nums) {

    const ans = []
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        let left = i + 1;
        let right = nums.length - 1;

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        while (left < right) {

            if ((nums[left] + nums[right] + nums[i]) === 0) {
                let triplet = [nums[i], nums[left], nums[right]];
                console.log(triplet);
                ans.push(triplet)

                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;

            }
            else if ((nums[left] + nums[right] + nums[i]) < 0) {
                left++;
            }
            else {
                right--;

            }
        }
    }
    return ans;
}
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSumOptimized([-1, 0, 1, 2, -1, -4]));