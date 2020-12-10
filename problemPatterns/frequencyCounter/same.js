

// O(N^2) complexity (TERRIBLE)
const sameNaive = (arr1, arr2) => {

    if (arr1.length != arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        console.log('correctIndex', correctIndex);
        if (correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1)
    }

    return true;
}

// O(N) efficiency (BETTER)

const sameRefactored = (arr1, arr2) => {
    // same initial check
    if (arr1.length != arr2.length) {
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    return true;

}

console.log(sameRefactored([1, 2, 3, 2], [9, 1, 4, 4]))