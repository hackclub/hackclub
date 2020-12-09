/***Program to print square of number via functional programming */

const numbers = [1, 2, 3, 4, 5]
    
const squares = numbers.map(ele => ele * 2) // stores stores the squares of the numbers of array numbers

squares.forEach((square, i) =>
    console.log("The square of", numbers[i], "is =", square))