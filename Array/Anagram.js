/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length !== t.length) {
        return false;
    }
    const freqCount = new Array(26).fill(0);
    for (let char of s) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        freqCount[index]++;
    }

    for (let char of t) {
        let index = char.charCodeAt(0) - 97;
        freqCount[index]--;
    }

    for(let i=0;i<freqCount.length;i++){
        if(freqCount[i]!==0)
            return false
    }
    return true;
};
console.log("Answer is ",isAnagram("anagram", "nagaram"))
