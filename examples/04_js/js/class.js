class Dog {
	constructor(title, breed, color, age, size, pic){
		this.title = title;
		this.breed = breed;
		this.color = color;
		this.age = age;
		this.size = size;
		this.pic = pic
	}

	get item(){
		const section = document.createElement("section");
        section.classList.add("dog");

        //header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        //column container
        const columnContainer = document.createElement("div");
        columnContainer.classList.add("columns");
        section.append(columnContainer);

        //first Column
        const divCol1 = document.createElement("div");
        columnContainer.append(divCol1);
        divCol1.append(this.picture(this.pic));

        //second Column
        const divCol2 = document.createElement("div");
        columnContainer.append(divCol2);

		return section;
	}

	picture(fileName){
		const img = document.createElement("img");
        img.src = `images/classes/${fileName}`;
        return img;
	}
}

const dogs = [];
dogs.push(new Dog('Lolo', 'Min-shusher', 'Gray', 20, 'small', 'golden-retriever.jpg'));
dogs.push(new Dog('Lolo', 'Min-shusher', 'Gray', 20, 'small', 'pitt-bull.jpg'));
dogs.push(new Dog('Lolo', 'Min-shusher', 'Gray', 20, 'small', 'yorkie.jpg'));

//on page load
const dogListDiv = document.getElementById("dog-list");

dogs.forEach((dog)=>{
    dogListDiv.append(dog.item);
});