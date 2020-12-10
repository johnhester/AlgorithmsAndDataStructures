//implement a function which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in
//you can solve this using frequency counter OR multiple pointers
//time complexity: O(n)
//space complexity: O(n)


const frequencyDuplicates = (...args) => {
    // spread operator allows for any number of args and stores them as an array

    //edge cases
    if(args.length === 1 || args.length === 0) {return false;}

    //lookup table
    const lookup = {};    

    //iterate through args, starting with second item
    for (let i = 0; i < args.length; i++) {
        //if value exists in lookup return true
        if (lookup[args[i]]){
            return true;
        } else {
        // else add element to lookup
            lookup[args[i]] = (lookup[args[i]] || 0) + 1;
        }
    }

    //if true didn't trip anywhere
    return false;
}

console.log('result', frequencyDuplicates(1,2,3)) // false
console.log('result', frequencyDuplicates(1,2,2)) // true
console.log('result', frequencyDuplicates('a', 'b', 'c', 'a')) //true
console.log('result', frequencyDuplicates('a', 'b', 'c', 'd')) //false

