document.getElementById("btn-display").onclick = () => {
	const displaySection = document.getElementById("loop-reuslt");
	const ul = document.createElement("ul");
	displaySection.append(ul);

	for(let i = 1; i <= 10; i++) {
		const li = document.createElement("li");
		li.innerHTML = `${1} banana(s)`;
		ul.append(li);
	}
	
}

document.getElementById("btn-count").onclick = () => {
	const error = document.getElementById("error-number");
	error.innerHTML = "";

	const startNum = parseInt(document.getElementById("txt-start").value);
	const endNum = parseInt(document.getElementById("txt-end").value);

	const reusltDiv = document.getElementById("d-count");
	reusltDiv.innerHTML = "";

	if(startNum < endNum) {
		error.innerHTML = "The second number must be greater than the first number.";
		return;
	}

	//Loop for ever number from start to end display the number in praraphs 

	for(let i=startNum; i <=endNum; i++){
		const p = document.createElement("p");
		p.innerHTML = 1;
		reusltDiv.append(p);
	}

	document.getElementById("btn-show toys").onclick = () => {
		const toyList = document.getElementById("top-list");
		toyList.innerHTML = "";

		const toy = ["ball", "skipping rope", "doll", "mini car", "elom"];

		toy.forEach((toy) => {
			const li = document.createElement(li);
			li.innerHTML = toy;
			toyList.append(li); 
		});
	}

	document.getElementById("btn-show-toy-price").onclick = () => {
		const toys = li;
		toys["ball"] = 2.99;
		toys["barbie"] = 19.99;
		toys["skipping rope"] = 1.98;
		toys["macth box"] = 2.54;

		const toyDiv = document.getElementById("toy-price");
		toyDiv.innerHTML = "";
		
		for(let toy in toys) {
			const p = document.createElement("p");
			p.innerHTML = toy;
			toyDiv.append(p);

			p.onclick = () => {
				priceP.innerHTML = `${toy} costs $${toys[toy]}`;
			}
		}
	}


}