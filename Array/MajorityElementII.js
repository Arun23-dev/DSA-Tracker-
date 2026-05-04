function MajorityII(nums) {

    const ans = [];

    const freq = Math.floor(nums.length / 3);
    let candidate1, candidate2;
    let count1 = 0, count2 = 0;
    for (let num of nums) {

        if (num === candidate1) {
            count1++;
        }
        else if (num === candidate2) {
            count2++;
        }
        else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        }
        else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        }
        else {
            count1--;
            count2--;
        }
    }
    console.log(candidate1);
    console.log(candidate2);
    console.log(count1);
    console.log(count2);


    count1 = 0;
    count2 = 0;
    for (num of nums) {
        if (num == candidate1) {
            count1++;
        }
        else if (num == candidate2) {
            count2++;
        }
    }
    if (count1 > freq) {
        ans.push(candidate1);
    }
    if (count2 > freq) {
        ans.push(candidate2)
    }

    return ans;
}

// console.log(MajorityII([1, 1, 1, 1, 2, 2, 2, 3, 4, 5]))
// console.log(MajorityII([3, 2, 3]))
console.log(MajorityII([2, 1, 1, 3, 1, 4, 5, 6]))
