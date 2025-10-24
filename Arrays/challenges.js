
// ================================
// JavaScript Array Challenges
// ================================

// -----------------------------------------------

// Challenge 1: Access an Array Item
// Create an array called "fruits" with at least 4 fruit names.
// Log the first item to the console.

let fruits = ["Apple", "Grape", "Orange", "Blueberry"]
console.log(fruits[0])



// -----------------------------------------------

// Challenge 2: Change an Array Item
// Using the "fruits" array, change the second fruit to something new.
// Log the array to confirm the change.

fruits[1] = "Banana"
console.log(fruits[1])


// -----------------------------------------------

// Challenge 3: Add an Item to an Array
// Add a new fruit to the end of the "fruits" array using push().
// Log the array to confirm it was added.

fruits.push("Mango")
console.log(fruits[4])

// -----------------------------------------------

// Challenge 4: 2D Array Access
// Create a 2D array called "matrix" that is 2x2.
// Fill it with numbers of your choice.
// Log the number in the first row, second column.

let matrix = [
    [10, 20],
    [123, 456]
]
console.log(matrix[0][1])

// -----------------------------------------------

// Challenge 5: Parallel Arrays
// Create two arrays: "names" and "ages".
// Put 3 items in each so that the indices match (example: names[0] is  "Alice", ages[0] is 10).
// Log a sentence using the first index like: "Alice is 10 years old."

let names = ["James", "Zach", "Camron"]
let ages = [15, 24, 34]
console.log(names[0], "is", ages[0], "years old.")



// -----------------------------------------------

// Challenge 6: Sum All Numbers in a 2D Array
// Create a 2D array called "numbers" with at least 3 rows and 3 columns filled with numbers.
// Use a loop to calculate the sum of all numbers in the array.
// Log the total sum to the console.
let lol = 0
let lol1 = 0
let sum = 0
let numbers = [
    [0, 30, 51],
    [8, 83, 291],
    [105, 1005, 91]
]
for (let i = 0; i < numbers.length*3; i++){
   sum += numbers[lol][lol1]
   lol1+=1
   if (lol1==3){
    lol1=0
    lol+=1
   }
}
console.log(sum)