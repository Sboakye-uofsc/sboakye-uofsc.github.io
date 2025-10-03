const getShoes = async()	=> {
	const url = "https://portiaportia.github.io/json/shoes.json";

	try {
		const response = await fetch(url);
		return response.json();
	}
	catch (error) {
		console.log("sorry");
	}
}

const showShoes = async() => {
	const shoes = await getShoes();
	const shoeList = document.getElementById("shoe-list");

	shoes.forEach((shoes)=> {
		//make a separate for each shoe put all the data in, nice formattied
		//then append it the shoeList

		const section = document.createElement("section");
		section.classList.add("add");

		const ul = document.createElement("ul");
		shoeList.append(section);

		for(i = 0; i < shoes.reviews.length; i++) {
			const li = document.createElement("li");
			li.innerHTML = shoes.reviews[i];
			section.append(li);
			console.log(shoes.reviews[i]);
		}
			
		console.log(shoes.name);
	});
}

showShoes();