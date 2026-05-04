// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromeBruteForce = function (s) {


    const array = [];
    for (let i = 0; i < s.length; i++) {

        if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) {

            array.push(s[i].toLocaleLowerCase());
        }
        else if (s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122) {
            array.push(s[i]);
        }
        else if (s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57) {
            array.push(s[i])
        }

    }
    console.log(array);
    const length = array.length;
    let firstPointer = 0
    let secondPointer = length - 1;
    for (let i = 0; i < length / 2; i++) {
        if (array[firstPointer] !== array[secondPointer]) {
            return false;
        }
        firstPointer++;
        secondPointer--;

    }
    return true;
}
// TC:Order(N);
// SC:O(N);

// console.log(isPalindromeBruteForce("A man, a plan, a canal: Panama"))
// console.log(isPalindromeBruteForce("0P"))


var isPalindromeBetter = function (s) {

    let array = new Array(s.length)
    let k = 0;
    for (let i = 0; i < s.length; i++) {

        if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) {

            array[k] = s[i].toLocaleLowerCase();

            k++;
        }
        else if (s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122) {
            array[k] = s[i];
            k++;
        }
        else if (s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57) {
            array[k] = s[i]
            k++;
        }

    }
    console.log(array);
    const length = k;
    let firstPointer = 0
    let secondPointer = length - 1;
    for (let i = 0; i < length / 2; i++) {
        if (array[firstPointer] !== array[secondPointer]) {
            return false;
        }
        firstPointer++;
        secondPointer--;

    }
    return true;
}
var isPalindrome = function (s) {

    function isAlphanumeric(char) {
        return (
            char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 ||
            char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ||
            char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57
        )
    }
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        
        if (left < right && !isAlphanumeric(s[left])) {
            left++;
            continue;
        }
        if (right > left && !isAlphanumeric(s[right])) {
            right--;
            continue;
        }
        if (s[right].toLocaleLowerCase() !== s[left].toLocaleLowerCase()) {
            return false;
        }

        left++;
        right--;


    }
    return true;
}



// TC:Order(N);
// SC:O(N);

console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("0P"))