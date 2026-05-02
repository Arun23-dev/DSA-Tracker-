// 1572. Matrix Diagonal Sum

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let diagonalSum=0;
    if(mat.length===0){
        return 0;
    }
    if(mat.length===1){
        return mat[0][0];
    }
    let n=mat.length;
    for(let i=0;i<n;i++){
        diagonalSum+=(mat[i][i]+mat[n-i-1][i])
    }
    if(n%2!==0){
        diagonalSum-=mat[Math.floor(n/2)][Math.floor(n/2)];
    }
    return diagonalSum;

};
console.log(diagonalSum([[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]))

// Time Complexity :O(n);
// SC:1