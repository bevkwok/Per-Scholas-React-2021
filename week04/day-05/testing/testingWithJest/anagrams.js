/**
@param {string} word1 - a word
@param {string} word2 - another word word

@returns {boolean} returns true if word1 and word2 are anagrams. only 1-word anagrams, not worrying about spaces
**/
function isAnagram(word1, word2) {

    // make an object to keep count of the character inside word1
    const trackChar = {};
    [...word1.toLowerCase()].forEach(word => {
        trackChar[word] ? trackChar[word] += 1 : trackChar[word] = 1
    });

    // turn word2 into an array
    const word2Array = [...word2.toLowerCase()];

    // loop through word2Array 
    // see if all charactor in word2 are in word1 object
    for(let i = 0; i < word2Array.length; i++){


        if (!trackChar[word2Array[i]]) {
            // if a letter in word2 can't be found in word1
            return false;
        } else {
            // decrease word1 object letter count if found
            trackChar[word2Array[i]] = trackChar[word2Array[i]] - 1;
        }
    }
    // just in case if word2 has one additional letter
    return Object.values(trackChar).every(val => val === 0);
}

console.log(isAnagram('Cried', 'Cried'));
console.log(isAnagram('Cried', 'cried'));
console.log(isAnagram('Cried', 'creid'));
console.log(isAnagram('Cried', 'ried'));
console.log(isAnagram('Cried', 'criedd'));
console.log(isAnagram('Cried', 'cred'));
console.log(isAnagram('Cried', 'credii'));





