 // Function to generate a random color
 function getRandomHexColor() {
    let hex = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hex.padStart(6, '0')}`;
}

// Function to change the background color of the element
function changeColor() {
    const newColor = getRandomHexColor(); // Get a random color
    const colorBox = document.getElementById("Colorbackgroound");
    colorBox.style.backgroundColor = newColor; // Change the background color
}