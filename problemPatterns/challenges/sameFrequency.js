//given two positive integers, find out if the two numbers have the same frequency of digits
//required time complexity: O(N)
//pattern: Frequency Counter

const sameFrequency = (num1, num2) => {
    //convert numbers into string arrays
    let arr1 = num1.toString().split('');
    let arr2 = num2.toString().split('');
    console.log('arr1', arr1);
    console.log('arr2', arr2);

    //basic length confirmation
    if (arr1.length !== arr2.length) return false;

    //create reference object
    const lookup = {};

    //establish num counts in lookup object
    arr1.forEach(element => {
        lookup[element] ? lookup[element] += 1 : lookup[element] = 1;
    });

    //compare arr2 to lookup
    for (let i = 0; i < arr2.length; i++) {
        //compare each digit of arr2 to the corresponding digit in lookup and subtract if matching
        if(lookup[arr2[i]]){
            lookup[arr2[i]] -= 1;
        } else {
        //first, confirm that the item in arr2 exists in lookup
            return false;
        }
    }

    return true;
}

console.log('result', sameFrequency(34,14));