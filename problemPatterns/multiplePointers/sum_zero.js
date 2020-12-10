// write a function called sumZero which accepts a sorted array of integers.
// The ufnction should find the first pair where the sume is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist
// ex arr: [-4,-3,-2,-1,0,1,2,3,10]

const sumZero_naive = (arr) => {
    //nested loop to simply compare values
    // O(N^2)
    for (let i = 0; i < arr.length; i++) {
        for (let j= i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
} 

const sumZero_refactored = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    // remember! this array has been sorted from negative to positive already
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}