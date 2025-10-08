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

/* Mobile drop-down menu */
document.addEventListener('DOMContentLoaded', () => { document.documentElement.classList.add('js'); // flag that JS is available
const nav = document.querySelector('#header .header-content nav');
if (!nav) return;

const links = Array.from(nav.querySelectorAll('a'));
if (!links.length) return;

const label = document.createElement('label');
label.className = 'mobile-nav';
label.setAttribute('aria-label', 'Site navigation');

const select = document.createElement('select');
select.className = 'mobile-nav-select';

const defaultOpt = document.createElement('option');
defaultOpt.value = '';
defaultOpt.textContent = 'Menu';
defaultOpt.disabled = true;
defaultOpt.selected = true;
select.appendChild(defaultOpt);

links.forEach(link => {
const opt = document.createElement('option');
opt.value = link.href;
opt.textContent = link.textContent.trim();
select.appendChild(opt);
});

label.appendChild(select);
// Insert dropdown after the existing nav
nav.parentNode.insertBefore(label, nav.nextSibling);

select.addEventListener('change', () => {
const url = select.value;
if (url) window.location.href = url;
});
});

