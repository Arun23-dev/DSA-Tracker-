// 2404. Most Frequent Even Element

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let myMap = new Map();

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] % 2 === 0) {
            // do the element is in the my mapor not 
            if (myMap.has(nums[i])) {
                myMap.set(nums[i], myMap.get(nums[i]) + 1);

            }
            else {
                myMap.set(nums[i], 1);
            }
        }
        
    }
    let maxFreq = 0;
    let ans = -1;
    for (let [num, freq] of myMap) {
        if (freq > maxFreq || (freq == maxFreq && ans > num)) {
            maxFreq = freq;
            ans = num;
        }
    }
    console.log(myMap);
    return ans;

}
console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1]))