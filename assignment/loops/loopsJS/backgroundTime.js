function updateBackground() {
    const now = new Date();
    const currentHour = now.getHours();

    // Target the body element directly
    const body = document.body;

    if (currentHour >= 6 && currentHour < 18) { 
        
        body.style.background = "rgba(194, 241, 243, 1)"; 
        console.log("Day mode - Light background");
    } else {
        // Night time (6pm - 6am) - Dark background
        body.style.background = "rgba(0, 0, 0, 1)"; // Black
        console.log("Night mode - Dark background");
    }
}

updateBackground();

setInterval(updateBackground, 60000);