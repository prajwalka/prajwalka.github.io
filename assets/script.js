// Get the header element
const header = document.getElementById('header');
// Get all navigation links
const navLinks = document.querySelectorAll('nav a');
// Get site title
const siteTitle = document.querySelector('.site-title');

// Listen for scroll event
window.onscroll = function() {
  if (window.scrollY > 2) { // When scrolling down
    header.classList.add('scrolled');
  } else { // When at the top
    header.classList.remove('scrolled');
  }
};