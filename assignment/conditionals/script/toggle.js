const toggleButton = document.getElementById("triangle-down");
const navToggle = document.getElementById("main-nav")

 toggleButton.addEventListener("click", function() { 
    if(navToggle.style.display === "none" || navToggle.style.display === "") {
        navToggle.style.display = "block";
        toggleButton.classList.add("triangle-up");
    } else {
        navToggle.style.display = "none";
         toggleButton.classList.remove("triangle-up");
    }
});