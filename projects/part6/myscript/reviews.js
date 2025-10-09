class ReviewGame {
	constructor(data)
	{
		this.name_game = data.name_game;
		this.released = data.released;
		this.img = data.img;
		this.username = data.username;
		this.rating = data.rating;
		this.date_respond = data.date_respond;
		this.description = data.description;
		this.reviews = data.reviews
	}

	createReviewCard(){
		const div = document.createElement("div");
		div.classList.add("container");

		const img_section = document.createElement("section");
		img_section.classList.add("img-rating");
		div.append(img_section);

		const section = document.createElement("section");
		section.classList.add("spilt-rating");
		div.append(section);

		const img = document.createElement("img"); /*Change to castle*/
		img.classList.add("img-rate");
		if(this.name_game === "Castle Crashers") {
			img.src =`https://sboakye-uofsc.github.io/projects/part6${this.img.substring(1)}`;
		}
		img_section.append(img);

		const h2 = document.createElement("h2");
		h2.classList.add("title-c")
		if(this.name_game === "Castle Crashers"){
			h2.innerHTML = this.name_game;
		}
		section.append(h2);

		const h3 = document.createElement("h3");
		if(this.rating === 4.5){
			h3.innerHTML = this.rating;
		}
		section.append(h3);

		const h4 = document.createElement("h4");
		if(this.released === "2012-26-09"){
			h4.innerHTML = this.released;
		}
		section.append(h4);

		return div;
	}
}

const getReview = async () => {
	const url = "https://sboakye-uofsc.github.io/projects/part6/myjson/review.json";

	try {
		const response = await fetch(url);
		return await response.json();
	}catch(error){
		console.log(error);
	}
};

const showReview = async () => {
	let reviews = await getReview();
	let reviewGame = document.getElementById("review-game")

	reviews.forEach((review)=> {
		reviewGame.append(getReviewComment(review)); 
		const reviewInstance = new ReviewGame(review);
		const card = reviewInstance.createReviewCard();

		reviewGame.append(card);
	});
	
}

const getReviewComment = (review) => {
	let section = document.createElement("section");


	let h3 = document.createElement("h3");
	h3.innerText = review.name_game;
	

	return section;
};



window.onload = () => showReview(); 