// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]

// All the methods are being chained, so we are putting them inside the variable "finalIntegers" which will be console.log'd 
const finalIntegers = integers
// Sort the numbers in descending order (10, 9, 8, 7, etc).
    .sort((a, b) => b - a)
// Remove any integers greater than 19.
    .filter(currentInteger => currentInteger <= 19)
// Multiply each remaining number by 1.5 and then subtract 1.
    .map(i => (i * 1.5) - 1)
// Then output (either in the DOM or the console) the sum of all the resulting numbers.
    .reduce((first, second) => first + second)

// This will display the result of the chained methods above
console.log(finalIntegers)

