// ===============================
// Canvas Walking Sprite Challenge
// ===============================

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

let zombieBack = document.getElementById("zombie_back");

let x = 100;
let y = 100;

let variables = {};

variables["w"] = () => y -= 20;
variables["s"] = () => y += 20;
variables["a"] = () => x -= 20;
variables["d"] = () => x += 20;


// i am the GREATEST PROGRAMMER ON PLANET EARTH MM DAMN I ALWAYS FIND A WAY
// learned that you can store functions in a table of objects. if the string from the keypress is
// found in the table, then it evaluates to true and runs the function corresponding to the object.
// then you just use the updated xy to draw. no elseif's. no unnecessary bloat. i was put on this
// earth to solve puzzles and perfect things for no reason like srsly this is so unnecessary LOL
function onkeypressed(event){
    let key = event.key.toLowerCase();
    if (variables[key]){ 
        pencil.clearRect(x,y,100,100)
        variables[key]();
        pencil.drawImage(zombieBack, x, y, 100, 100)
    }
}

document.addEventListener("keydown", onkeypressed)