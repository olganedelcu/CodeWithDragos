// Write a function `sum` that computes the sum of the numbers in an array.

function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    };
    return total;

}

//Write a function `max` that accepts an array of numbers and returns the
//*largest* number in the array.

function max(arrayN) {
    let max;
    max = arrayN[0];
    for (let i = 1; i < arrayN.length; i++) {
        if (max < arrayN[i]) {
            max = arrayN[i];
        }
    }
    return max;
}

//Use .split to write a function `longestWord` that takes a string as an
//argument and returns the longest word.

function longestW(string) {
    let words;
    words = string.split(' ');
    let longest = words[0].length;
    for (let i = 1; i < words.length; i++) {
        if (longest < words.length[i]) {
            longest = words.length[i];
        };
    };
    return longest;

};

// Write a function `evens` that accepts an array as an argument, and returns an array consisting of all the *even* numbers in that array.

function evens(array) {
    let evenArr;

    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) == 0) {
            evenArr.push(array[i]);
        }
    }
    return evenArr;
}

// Write a function `remove` that accepts an *array* and an *element*, and  returns an array with all occurrences of the *element* removed.

function remove(array, element) {
    let finalArr;

    for (let j = 0; j < array.length; j++) {
        if ((array[i] !== element)) {
            finalArr.push(array[i]);
        }
    }
    return finalArr;
}