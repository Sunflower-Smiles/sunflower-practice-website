// Image switcher

const myImage = document.querySelector("img");

myImage.onclick = function() {
	const mySrc = myImage.getAttribute("src");
	if(mySrc === "images/sunflower-bundle.jpg") {
		myImage.setAttribute("src", "images/kitten.png");
	} else {
		myImage.setAttribute("src", "images/sunflower-bundle.jpg");
	}
};

// Personalized welcome message

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
	const myName = prompt("Please enter your name.");
	if(!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.innerHTML = "Welcome to the Sunflower Field," +myName;
	}
}

if(!localStorage.getItem("name")) {
	setUserName();
} else {
	let storedName = localStorage.getItem("name");
	myHeading.innerHTML = "Welcome to the Sunflower Field," +storedName;
}


myButton.onclick = function() {
	setUserName();
}


