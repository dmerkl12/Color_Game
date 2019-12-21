let numSquares = 6;
let colors;
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");

let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    //generate 3 random colors
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none"
        }
    }

})

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    //generate 6 colors
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click", function () {
    //generate new colors
    colors = generateRandomColors(numSquares);
    //picked new a new random color
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    messageDisplay.textContent = "";
    //change the colors of the squares
    for (let i = 0; i < squares.length; i++) {
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue"
})

colorDisplay.textContent = pickedColor;

//loop through the colors
for (let i = 0; i < squares.length; i++) {
    //add initial colors to squares

    // squares[i].style.backgroundColor = colors[i];

    //add event listener for clickeds square
    squares[i].addEventListener("click", function () {
        // grab color of clicked square
        var clickedColor = squares[i].style.backgroundColor;
        console.log(clickedColor, pickedColor)
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!"
            resetButton.textContent = "Play again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for (let i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}
