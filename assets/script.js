// Get the header element
const header = document.getElementById('header');

// Listen for the scroll event
window.onscroll = function() {
  if (window.scrollY > 2) { // Change this value as per your preference
    header.style.backgroundColor = "black"; // Heritage Blue
    header.style.color = "white";
  } else {
    header.style.backgroundColor = "white"; // Default background
    header.style.color = "black"; 
  }
};