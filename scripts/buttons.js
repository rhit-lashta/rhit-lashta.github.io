
/*
let favCount = document.getElementById("favorite_number");

let plusBtn = document.getElementById("plus-btn");
plusBtn.addEventListener("click", function() {
    incrementCount(1);
});
         
let minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener("click", function() {
    incrementCount(-1);
});

let resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function() {
    resetCount();
});  

function incrementCount(amount) {
    let count = parseInt(favCount.innerHTML);
    count += amount;
    favCount.innerHTML = count;
}

function resetCount() {
    favCount.innerHTML ="0";
}


let colorBox = document.getElementById("favoriteBox");
let currentColor;

let blueBtn = document.getElementById("blue-btn");
blueBtn.addEventListener("click", function() {
    setBoxColor("blue");
});
         
let greenBtn = document.getElementById("green-btn");
greenBtn.addEventListener("click", function() {
    setBoxColor("green");
});

let redBtn = document.getElementById("red-btn");
redBtn.addEventListener("click", function() {
    setBoxColor("red");
});  

let purpleBtn = document.getElementById("purple-btn");
purpleBtn.addEventListener("click", function() {
    setBoxColor("purple");
});

// classList color change help Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList //
function setBoxColor(color) {
    let boxName = color + "Box" 
    if (boxName != currentColor)
    {
        colorBox.innerHTML = color;
        colorBox.classList.toggle(currentColor);
        currentColor = boxName;
        colorBox.classList.toggle(boxName);
    }
    

}
*/

