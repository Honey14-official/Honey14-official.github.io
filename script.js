// script.js

// Function to display current date and time
function displayDateTime() {
    const now = new Date();
    const utcDateTime = now.toISOString().replace('T', ' ').split('.')[0];
    document.getElementById('date-time').innerText = utcDateTime;
}

// Function to initialize interactive features
function initInteractiveFeatures() {
    displayDateTime();
    setInterval(displayDateTime, 1000); // Update every second
}

// Execute the initialization on window load
window.onload = initInteractiveFeatures;