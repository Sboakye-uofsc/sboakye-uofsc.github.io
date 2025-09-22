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

document.getElementById("btn-mood-ring").onclick = () => {
	const color = document.getElementById("txt-color").value.trim.toLowerCase();
	const p = document.getElementById("p-mood-result");
	p.innerHTML = "";
	const error = document.getElementById("error-color");
	document.getElementById("error-color").innerHTML = "";
	let mood = "";
	
	
	if(color == red) {
		mood = "That your in love";
	}
	if (color == blue){
		document.getElementById("error-color").innerHTML = "Why soo sad";
	}
	else if(color == "") {
		document.getElementById("error-color").innerHTML = "* blank";
		return;
	}

	let counter = 0;
	let counterInterval;
	const countP = document.getElementById("p-count");
	const btnStartCount = document.getElementById("btn-count-start");
	const btnPauseCount = document.getElementById("btn-count-pause");

	document.getElementById("btn-count-start").onclick = () => {
		counterInterval = setInterval(()=> {
			counter++;
			countP.innerHTML = counter;
		}, 1000);
	}

	document.getElementById("btn-count-stop").onclick = () => {
		console.log("Stop");
	}
}