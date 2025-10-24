// ================================================
// JavaScript Object Challenges
// ================================================

// Challenge 1: Make Your First Object
// Create an object called car with three properties:
// brand, model, and year. Give them any values you like.
// Log the whole object, then log just the brand.

// Your code here:

let car = {
    brand: "Chevrolet",
    model: "Corvette",
    year: "2020"
}
console.log(car)
console.log(car.brand)

// -----------------------------------------------

// Challenge 2: Change a Property
// Using your car object from Challenge 1, change the year to a newer one.
// Then log a message like "My car is now a 2023 Toyota!"

// Your code here:

car.year = "2025"
console.log("My car is now a",car.year,car.brand+"!")


// -----------------------------------------------

// Challenge 3: Add a New Property
// Add a new property called color to your car object.
// Then log "My car is [color]" using the color you added.

// Your code here:

car.color = "Black"
console.log("My car is", car.color)


// -----------------------------------------------

// Challenge 4: Nested Object
// Create an object called students with two student objects inside.
// Both students should have a grade for math and art.
// Log each student's art score.

// Your code here:

let students = {
    
}
let student1 = {
    math: "92",
    art: "85"
}
let student2 = {
    math: "79",
    art: "86"
}
students.student1 = student1
students.student2 = student2
console.log(students.student1)
console.log(students.student2)

// -----------------------------------------------

// Challenge 5: Combining Objects and Functions
// Create an object called player with properties: name and score.
// Add a function called addPoints(points) inside the object
// that increases player.score by the number given and logs the new score.
// Call addPoints() a few times to test it.

// Your code here:

let player = {
    name: "john h. player",
    score: 20,
    addPoints : function(points){
        player.score+=points
        console.log(player.score)
    }
}
player.addPoints(5)
player.addPoints(3)
player.addPoints(20)


// ================================================
// End of Object Challenges
// ================================================
