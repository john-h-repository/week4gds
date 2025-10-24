// ================================
// JavaScript Timing Challenges
// ================================

// -----------------------------------------------
// Challenge 1: Basic Timeout
// Use setTimeout to log "Hello after 2 seconds!" after exactly 2000 milliseconds.

function ok(){
    console.log("Hello after 2 seconds!")
}

setTimeout(ok, 2000)


// -----------------------------------------------
// Challenge 2: Countdown
// Write a countdown from 3 to 1 using three setTimeout calls.
// Each number should appear one second apart in the console.


function time(int){
    console.log(int)
}

setTimeout(time, 1000, 3)
setTimeout(time, 2000, 2)
setTimeout(time, 3000, 1)

// -----------------------------------------------
// Challenge 3: Repeating Message
// Use setInterval to log "Still going..." every second.
// After 5 seconds, stop the interval using clearInterval.

let xddd = setInterval(console.log, 1000, "Still going...")

setTimeout(clearInterval, 5000, xddd)



// -----------------------------------------------
// Challenge 4: Delayed Color Change
// Create a <div> in your HTML file with id="box". Put some text in it.
// After 3 seconds, change its background color to blue using setTimeout.

function vro(){
    document.getElementById("box").style.backgroundColor = "yellow"
}   
setTimeout(vro, 3000)



// -----------------------------------------------
// Challenge 5: Flashing Box
// Create a <div> in your HTML file with id="box2". Put some text in it.
// Using setInterval, make the same box’s background color toggle
// between red and white every half second (500 ms).
// Add a setTimeout to stop the flashing after 5 seconds... or when you click on it!

function idkman(){
    if (document.getElementById("box2").style.backgroundColor == "white"){
        document.getElementById("box2").style.backgroundColor = "red"
    }else{
        document.getElementById("box2").style.backgroundColor = "white"
    }
}

let rw = setInterval(idkman, 500)
setTimeout(clearInterval, 5000, rw)
document.getElementById("box2").addEventListener("click", function(){
    console.log("ok")
    setTimeout(clearInterval, 0, rw)
})



