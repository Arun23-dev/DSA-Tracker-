/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    const myMap = new Map();
    myMap.set(nums[0], 1);
    const length = nums.length;
    for (let i = 1; i < nums.length; i++) {

        if (myMap.get(nums[i])) {
            myMap.set(nums[i], myMap.get(nums[i]) + 1);

        }
        else {
            myMap.set(nums[i], 1)
        }
        if (myMap.get(nums[i]) > (length / 2)) {
            return nums[i];

        }
    }

    return nums[0];

}
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
      
    let candidate,count=0;
    for(num of nums){

        if(count==0){
            count=1;
            candidate=num;
        }
        else{

            if(candidate==num){
                count++;

            }
            else{
                count--;

            }
        }
    }
    return candidate;
    
};
console.log(majorityElement([3, 2, 3]))
// Time Complexity: O(n);
// Space Complexity: O(n);

// Optimized using the moore voting algorithm 