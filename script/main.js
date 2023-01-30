// Step 1
// variables always go at the top
// these are the connections that you're making to elements on the page
// using CSS to select those elements with JS

// create a 1 to 1 connection with a variable
// let theButton = document.querySelector("#buttonZero");

// create a 1 to many connection with a variable
let theButtons = document.querySelectorAll("#buttonHolder img"),
    theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board");
	// theHeading = document.querySelector("#headLine p");



// Step 3
// fanctionality always goes in the middle: How do we want
// the app to behave?
function changeBGImage() {
	debugger;
	// theHeading.textContent = "Our Awesome Drog and Drop Game!";
	
	//start with the object, and then change a property
	// or run a method
	// theHeading.classList.add('orange-headline');

	let theNewSource = "images//backGround" + this.id + ".jpg";

	console.log(theNewSource);

	// theHeading.textContent = "Let's see what will happen!";
}



// Step 2 
//event handling always goes at the bottom:
// how do we want users to interact with our app

// 1 to 1 event handling
// theButton.addEventListener("click", changeBGImage);

// 1 to many event handling
theButtons.forEach(button => button.addEventListener("click", changeBGImage));