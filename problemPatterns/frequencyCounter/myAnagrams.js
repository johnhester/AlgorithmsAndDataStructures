 // Given two strings, write a function to determine if the second string is an anagram of the first.
 // An anagram is a word, phrase or name formed by rearranging the letters of another

 //used frequency counter solution


 // My solution
 const validAnagram = (base, anagram) => {



    // confirm that they have the same number of characters 
    if (baseArr.length != anagramArr.length) {
        return false;
    }

    //split strings into arrays
    let baseArr = base.split('');
    let anagramArr = anagram.split('');

    let freqCounterBase = {};
    let freqCounterAnagram = {};

    // get a count of each letter in strings
    for(let letter of baseArr) {
        freqCounterBase[letter] = (freqCounterBase[letter] || 0) + 1;
    }

    for(let letter of anagramArr) {
        freqCounterAnagram[letter] = (freqCounterAnagram[letter] || 0) + 1;
    }
    console.log('base', freqCounterBase)
    console.log('anagram', freqCounterAnagram)
    // compare values to confirm anagram (or prove false)
    for (let key in freqCounterBase) {
        if(freqCounterBase[key] !== freqCounterAnagram[key]) {
            return false
        }
    }

    return true
 }

 console.log('result', validAnagram('anagram', 'nagaram'));


 // course solution
 