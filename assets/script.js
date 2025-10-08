// Get the header element
const header = document.getElementById('header');
// Get all navigation links
const navLinks = document.querySelectorAll('nav a');
// Get site title
const siteTitle = document.querySelector('.site-title');

// Listen for scroll event
window.addEventListener('scroll', () => {
  if (window.scrollY > 2) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

function adjustBodyPadding() {
  const header = document.querySelector('header');
  if (header) {
    document.body.style.paddingTop = header.offsetHeight + 'px';
  }
}
window.addEventListener('load', adjustBodyPadding);
window.addEventListener('resize', adjustBodyPadding);