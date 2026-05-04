/**
 * @param {string} s
 * @return {boolean}
 * 
 * 
 */

function isPalindrome(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
var validPalindrome = function (s) {


    let left = 0;
    let right = s.length - 1;
    let leftElement, rightElement;

    while (left < right) {

        if (s[left] === s[right]) {
            left++;
            right--;

        }
        else {
            // skip on character 
            return (isPalindrome(s, left + 1, right) ||
                isPalindrome(s, left, right - 1))
        }

    }
    return true;

};
console.log(validPalindrome("abbda"))