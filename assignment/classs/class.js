class Picture {
	constructor(name, artist, image, frames) {
		this.name = name;
		this.artist = artist;
		this.image = image;
		this.frames = frames;
	}

	get item() {
		const section = document.createElement("section");
		section.classList.add("myArt");

		const h3 = document.createElement("h3");
		h3.innerHTML = this.name;
		section.append(h3);

		//column container
		const columnContainer = document.createElement("div");
		columnContainer.classList.add("columns");
		section.append(columnContainer);

		//first Column
		const divCol1 = document.createElement("div");
		columnContainer.append(divCol1);
		
		// Create clickable image
		const img = this.picture(this.image);
		img.style.cursor = "pointer";
		
		// Add click event to show popup
		img.onclick = () => {
			this.showPopup();
		};
		
		divCol1.append(img);

		return section;
	}

	picture(fileName) {
		const img = document.createElement("img");
		img.src = `img/${fileName}`;
		return img;
	}

	showPopup() {
		// Get or create popup container
		let popup = document.getElementById('image-popup');
		if (!popup) {
			popup = document.createElement('div');
			popup.id = 'image-popup';
			popup.classList.add('popup');
			document.body.append(popup);
		}

		// Clear previous content
		popup.innerHTML = '';

		// Create popup content
		const popupContent = document.createElement('div');
		popupContent.classList.add('popup-content');

		// Add close button
		const closeBtn = document.createElement('span');
		closeBtn.classList.add('close-btn');
		closeBtn.innerHTML = '&times;';
		closeBtn.onclick = () => {
			popup.style.display = 'none';
		};
		popupContent.append(closeBtn);

		// Add artwork title and artist
		const title = document.createElement('h2');
		title.textContent = this.name;
		popupContent.append(title);

		const artist = document.createElement('p');
		artist.textContent = `By: ${this.artist}`;
		popupContent.append(artist);

		// Add the large image
		const largeImg = this.picture(this.image);
		largeImg.classList.add('popup-image');
		popupContent.append(largeImg);

		if (this.frames) {
			largeImg.classList.add(`border-${this.frames}`);
		}
		
		popupContent.append(largeImg);

		popup.append(popupContent);
		popup.style.display = 'flex';
	}
}


const art = []
art.push(new Picture("Cozy Cottage","Lilac Ladonna", "cozy-cottage.jpg", "wood"));
art.push(new Picture("Imagination in reality", "Makai Wonder", "imagination-was-reality.jpg"));
art.push(new Picture("Just add Color", "John Bland", "just-add-color.jpg"));
art.push(new Picture("Kawaii Friends", "Kiki Unicakes", "kawaii-friends.jpg"));
art.push(new Picture("Live in Fairycore", "Lily Mooshem", "live-in-fairycore.jpg", "classic"));

const artListDiv = document.getElementById("art-list");

art.forEach((myArt)=>{
	artListDiv.append(myArt.item)
});

window.onclick = (event) => {
	const popup = document.getElementById('image-popup');
	if (popup && event.target === popup) {
		popup.style.display = 'none';
	}
};