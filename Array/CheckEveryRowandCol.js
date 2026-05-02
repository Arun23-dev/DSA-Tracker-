
// 2133. Check if Every Row and Column Contains All Numbers

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {

        let n=matrix.length;

        let rows=Array.from({length:n},()=>new Set())
        let cols=Array.from({length:n},()=>new Set());

        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                let val=matrix[i][j];
                if(rows[i].has(val)||cols[j].has(val)){
                    return false;
                }
                rows[i].add(val);
                cols[j].add(val);
            }
        }
        return true
    
};
// Time Complexity:O(n^2) Because two nested loop are running and inside the loop 
// O(1);
// Space Complexity:for the each rows we have set in  the worst case we can have the n element in the each set so (n^2)