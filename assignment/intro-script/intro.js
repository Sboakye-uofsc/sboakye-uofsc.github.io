
document.getElementById("demo").onclick = (event) => {
    document.getElementById("p-sun").innerHTML = `
        Here comes the sun<br>
        Sun<br>
        &nbsp;&nbsp;Sun<br>
        &nbsp;&nbsp;&nbsp;&nbsp;Sun<br>
        Here it comes
    `;
};

const colorPicker = document.getElementById("color-picker");
    const colorDisplay = document.getElementById("color-display");
    const colorCode = document.getElementById("color-code");

colorPicker.oninput = (event) => {
    const selectedColor = event.target.value;
    colorDisplay.style.color = selectedColor;
    colorCode.innerHTML = selectedColor.toUpperCase();
};


    const changeableImage = document.getElementById("changeable-image");
    let isSunny = false;

    changeableImage.onclick = (event) => {  // This is like Java
        changeableImage.src = "img/sunny.jpg";
        isSunny = true;
};