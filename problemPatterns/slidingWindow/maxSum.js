//sliding window pattern
//This pattern involves creating a window which can either be an array or number from one position to another
//Depending on a certain condition, the window either increases or closes (and a new window is created)
//Useful for keeping track of a subset of data in an array/string


//write a function which accepts an array of integers and a number called 'n'. 
//The function should calculate the maximum sum of 'n' consecutive elements in the array.



//nested loops, not great
const maxSubarraySum_naive = (arr, n) => {
    if (n > arr.length){
        return null;        
    }
    //this accounts for negative numbers in array
    let max = -Infinity;

    // this loop creates the sliding window that doesn't extend past end of array
    for( let i = 0; i < arr.length - n + 1; i++) {
        temp = 0;
        // iterates through our window and sums values
        for ( let j = 0; j < n; j++) {
            temp += arr[i + j];
        }
        // keeps max accurate
        if (temp > max) {
            max = temp;
        }
    }

    return max;
}

console.log(maxSubarraySum_naive([2,6,9,2,1,8,5,6,3], 3))

const maxSubarraySum_refactored = (arr,n) => {
    let maxSum = 0;
    let tempSum = 0;

    // edge case
    if (arr.length < n) return null;

    //creates initial window
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]
    }
    // initial max  
    tempSum = maxSum;

    // iterates through the array once by 'sliding the window' 
    // aka, subtracts the value at the front of the 'window' and adds the next value in line to make it 'slide'
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum_refactored([2,6,9,2,1,8,5,6,3], 3))