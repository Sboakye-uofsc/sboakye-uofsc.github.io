const toggleButton = document.getElementById("toggle-nav");
const navToggle = document.getElementById("main-nav")

/* SHOUT OUT TO Bro Code: How to HIDE and SHOW HTML using JavaScript*/
toggleButton.addEventListener("click", event => { 
	navToggle.classList.toggle("show-nav");
});


/* Important Notes
- Two are event and callback -- click is the event and the method/funtion is the callback
- With toggle make sure your toggle is ---only defined--- in media mobile class to work
- Along with call the CSS class show-nav with classList.toggle(with don't cause a inline overrides)*/