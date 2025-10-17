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
		const urlParams = new URLSearchParams(window.location.search);
		const gameName = urlParams.get('game');

		if(this.name_game !== gameName) {
			return null;
		}
		
		const div = document.createElement("div");
		div.classList.add("container");

		const img_section = document.createElement("section");
		img_section.classList.add("img-rating");
		div.append(img_section);

		const section = document.createElement("section");
		section.classList.add("spilt-rating");
		div.append(section);

		const img = document.createElement("img");
		img.classList.add("img-rate");
		img.src = `https://sboakye-uofsc.github.io/projects/part6${this.img.substring(1)}`;
		img_section.append(img);

		const h2 = document.createElement("h2");
		h2.classList.add("title-c")
		h2.innerHTML = this.name_game;
		section.append(h2);

		const h4 = document.createElement("h4");
		h4.innerHTML = this.released;
		section.append(h4);

		const rating_prog = document.createElement("div");
		rating_prog.classList.add("rating_progress");
		section.append(rating_prog);

		const h3 = document.createElement("h3");
		h3.innerHTML = this.rating;
		rating_prog.append(h3);
		
		const outerStar = document.createElement("div");
		outerStar.classList.add("outer-star");
		rating_prog.append(outerStar);

		const innerStar = document.createElement("div");
		innerStar.classList.add("inner-star");
		innerStar.innerHTML = "&#9733;&#9733;&#9733;&#9733;&#9733;";
		outerStar.append(innerStar);

		const p = document.createElement("p");
		p.classList.add("rate-num");
		p.innerHTML = "9,006";
		rating_prog.append(p);

		const divComment = document.createElement("div"); 
		divComment.classList.add("divComment");
		div.append(divComment);

		const respondSection = document.createElement("section");
		respondSection.classList.add("date_respond");
		divComment.append(respondSection);

		const userDate = document.createElement("p");
		userDate.innerHTML = this.date_respond;
		respondSection.append(userDate);

		const theUsername = document.createElement("section");
		theUsername.classList.add("user_Name");
		divComment.append(theUsername);

		const username = document.createElement("h3");
		username.innerHTML = this.username;
		theUsername.append(username);

		const descriptionSection = document.createElement("section");
		descriptionSection.classList.add("desc-Section");
		divComment.append(descriptionSection);

		const description = document.createElement("p");
		description.innerHTML = this.description;
		descriptionSection.append(description);

		const reviewsSection = document.createElement("section");
		reviewsSection.classList.add("reviewsSection");
		divComment.append(reviewsSection);

		const reviews = document.createElement("p");
		reviews.innerHTML = this.reviews;
		reviewsSection.append(reviews);

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
        const reviewInstance = new ReviewGame(review);
        const card = reviewInstance.createReviewCard();
        
        if(card) {
            reviewGame.append(card);
        }
    });
}


const getReviewComment = (review) => {
	let section = document.createElement("section");


	let h3 = document.createElement("h3");
	h3.innerText = review.name_game;
	

	return section;
};



window.onload = () => showReview(); 