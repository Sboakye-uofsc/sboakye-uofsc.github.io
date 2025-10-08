const getBreweries = async() => {
	const url = "https://openbrewerydb.org/v1/breweries";
	
	try {
		const reponse = await fetch(url);
		return reponse.json();
	} catch(error){
		console.log("Why")
	}
}

const showBreweries = async() => {
	const breweries = await getBreweries(); 
	const breweriesSection = document.getElementById("breweries");

	breweries.forEach((bub) => {
		const section = document.createElement("section");
		section.append
	});
}