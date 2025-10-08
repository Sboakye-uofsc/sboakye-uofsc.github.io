document.getElementById('arrow-prev').onclick = (event) => {
	event.preventDefault();
	const currentSilde = document.querySelector("#slideshow :(.hidden");
	let prevSilde = currentSilde.previousElementSibling;

	if(!prevSilde){
		prevSilde = document.querySelector('#slideshow : last-child')
	}
}

document.getElementById('arrow-next').onclick = (event) => {
	event.preventDefault();
}