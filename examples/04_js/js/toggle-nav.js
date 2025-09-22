document.getElementById("toggle-nav").onclick = () => {
	document.getElementById("nav-item").classList.toggle("hide-small");
}


btnPauseCount.onclick = () => {
	clearInterval(counterInterval);
	btnPauseCount.disable = true;
}

const goal = 10000;
document.getElementById("goal-span").innerHTML = goal;

document.getElementById("btn-donation").onclick = () => {
	const donation = document.getElementById("txt-donation").value;
	const errorSpan = document.getElementById("donation-error");
	errorSpan.innerHTML = "";

	if(isNaN(donation) || donation <= 0) {
		errorSpan.innerHTML = "* Invaild Amount."
		return;
	}

	const donationPercent = donation / goal *100;

	if(donationPercent >= 100) {
		donationMessage.innerHTML = "Goal Reached";
	}else{
		d
	}

	document.querySelector(":root").style.setProperty("--donation-percent", donationPercent + "%")
}