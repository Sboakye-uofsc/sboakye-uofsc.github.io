const slider = document.querySelector('.range-slider');
const textWater = document.querySelector('.waterless-days');
const textOutput = document.querySelector('.tooltip');


const imageDisplay = document.getElementById('healthy');


slider.addEventListener('input', function() {
    const dayValue = parseInt(this.value);

    if (dayValue <= 2) {
        imageDisplay.src = 'img/healthy.png';
        textWater.textContent = `It's been ${dayValue} days since watering your plant`;
		textOutput.textContent = `Your plant is healthy and happy`;
        
    } else if (dayValue >= 3 && dayValue <= 5) {
        imageDisplay.src = 'img/thirsty.png'; 
        textWater.textContent = `It's been ${dayValue} days since watering your plant`;
		textOutput.textContent = `Your plant needs watering`;
        
    } else if (dayValue >= 6 && dayValue <= 10){
        imageDisplay.src = 'img/need_water.png'; 
        textWater.textContent = `It's been ${dayValue} days since watering your plant`;
		textOutput.textContent = `Leaves are dropping the color is changing, water soon`;
    }
	else {
		imageDisplay.src = 'img/die.png';
		textWater.textContent = `It's been ${dayValue} days since watering your plant`;
		textOutput.textContent = `Sorry, your plant is no longer with us`;
	}
});


const exer1Button = document.getElementById("exer1");
const exer2Button = document.getElementById("exer2");
let exercise1Section = document.getElementById("exercise1");
let exercise2Section = document.getElementById("exercise2");

exer1Button.addEventListener("click", function() {
    exercise1Section.style.display = "block";
    exercise2Section.style.display = "none";
});

exer2Button.addEventListener("click", function() {
    exercise2Section.style.display = "block";
    exercise1Section.style.display = "none";
});

setInterval(() => {
	date=new Date().toLocaleTimeString()
	document.getElementById('clock').innerText=date
	}, 1000)
