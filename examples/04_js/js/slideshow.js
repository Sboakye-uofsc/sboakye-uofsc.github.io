setInterval(()=>{
	const currentSilde = document.querySelector("#slideshow :not(.hidden)")
	let nextSilde = currentSilde.nextElementSibling;

	if(!nextSilde){
		nextSilde = document.querySelector('#slideshow :first-child')
	}

	currentSilde.classList.add("hidden");
	nextSilde.classList.remove("hidden");
},1000);