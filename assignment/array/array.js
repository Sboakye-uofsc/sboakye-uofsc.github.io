const beforeDogs = {};
beforeDogs["Reck"] = 'img/before1.png';
beforeDogs["Lalo"] = 'img/before2.png';
beforeDogs["Molly"] = 'img/before3.png';
beforeDogs["Mack"] = 'img/before4.png';

// Fixed: Changed from atferDogs = [] to afterDogs = {}
const afterDogs = {};
afterDogs["Reck"] = 'img/after1.jpg';
afterDogs["Lalo"] = 'img/atfer2.png';  // Fixed: atfer2 → after2
afterDogs["Molly"] = 'img/after3.png';
afterDogs["Mack"] = 'img/after4.jpg';


function displayBeforeImages() {
    const imageContainer = document.getElementById('imageContainer');
    
    imageContainer.innerHTML = '';
    
    for (let dogName in beforeDogs) {
        const dogDiv = document.createElement('div');
        dogDiv.className = 'dogsBefore';
        
        const img = document.createElement('img');
        img.src = beforeDogs[dogName];
        img.alt = dogName;
        img.setAttribute('data-dog-name', dogName);
        

        const infoDiv = document.createElement('div');
        infoDiv.className = 'dog-info';
        infoDiv.innerHTML = `${dogName}<br>Please Adopt`;
        
        img.addEventListener('click', function() {
            showPopup(dogName);
        });
        
        dogDiv.appendChild(img);
        dogDiv.appendChild(infoDiv);
        imageContainer.appendChild(dogDiv);
    }
}

function showPopup(dogName) {
    const popup = document.querySelector('.popup-image');
    let popupImg = popup.querySelector('img');
    
    if (!popupImg) {
        popupImg = document.createElement('img');
        popup.appendChild(popupImg);
    }
    
    popupImg.src = afterDogs[dogName];
    popupImg.alt = `${dogName} - After adoption`;
    popup.style.display = 'flex';
}

// Close popup
document.getElementById('close').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

// Initialize when page loads
window.addEventListener('load', displayBeforeImages);