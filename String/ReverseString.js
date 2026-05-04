/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {


    // Applying Bruteforce Approach 
    // const length=s.length;
    // const ansArray=[];

    // for(let i=0;i<s.length;i++){
    //     ansArray.push(s[length-i-1])
    // }
    // console.log(ansArray)


    // Appllying the Two Pointer Approach
    const length=s.length;
    let firstPointer=0
    let secondPointer=length-1;
    for(let i=0;i<length/2;i++){
        [s[i],s[length-1-i]]=[s[secondPointer],s[firstPointer]]
        firstPointer++;
        secondPointer--;

    }
    console.log(s);
    
    
};

reverseString(["h","e","l","l","o"]);