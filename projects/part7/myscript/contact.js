const showEmail = async (e) => {
	e.preventDefault();
	const result = document.getElementById("result");
	let response = await getEmail();
	if(response.status == 200){
		result.innerHTML = "Email has Successfully Sent";
	}else{
		result.innerHTML = "Sorry email could not be sent";
	}
};

const getEmail = async (e) => {
	const form = document.getElementById("contact-form");
	const formData = new FormData(form);
	const object = Object.fromEntries(formData);
	const json = JSON.stringify(object);
	const result = document.getElementById("result");
	result.innerHTML = "Wait a bit...";

	try{
		const response = await fetch("https://api.web3forms.com/submit", {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
		});
		return response;
	}catch(error){
		console.log(error);
		document.getElementById("result").innerHTML = "Sorry something went wrong";
	}
};

document.getElementById("contact-form").onsubmit = subimtGame;