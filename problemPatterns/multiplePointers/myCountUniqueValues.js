//accepts a sorted array, and counts the unique vlues in the array. 
//There can be negative numbers in the array, but it will always be sorted.


const countUniqueValues = (arr) => {
    // two pointers
    let unique = 0; 
    let scout = 1;

    // create two pointers, iterate
    while (scout < arr.length){
        // check if unique
        if (arr[unique] === arr[scout]) {
            // if equal send scout forwards one
            scout++;
        } else {
            // if a unique value is found move unique forwards one and update the array
            unique++;
            // mutate array with each unique value so that unique acts as a counter
            arr[unique] = arr[scout];
        }
    }
    //return 0 if empty array, or add one to account for zero index
    if (unique === 0) {
        return unique;
    } else {
        return unique + 1;
    }
}

console.log(countUniqueValues([-2,-1,-1,0,1]))

