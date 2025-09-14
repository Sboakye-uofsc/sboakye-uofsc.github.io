/*const sayHello = () => {
	console.log("Hello World");
}

document.getElementById("btn-click-me").onclick = sayHello;
*/

document.getElementById("btn-click-me").onclick = (event) => {
	document.getElementById("p-welcome").innerHTML = "Hello World";
	event.currentTarget.classList.add("clicked"); //Current target is the button that was clicked
};

document.getElementById("happy-click").onclick = () => {
	document.getElementById()
};

document.getElementById("txt-emotion").onkeyup = (event) => {
	const userInput = event.currentTarget.value;
	document.getElementById("p-emotion").innerHTML =`You are feeling ${userInput}.`
	document.getElementById("img-emotion")
};

// Reacher .style 