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

// Helper to normalize paths (remove trailing slash except root)
const norm = p => {
  if (!p) return '/';
  p = p.replace(//+$/, '');
  return p === '' ? '/' : p;
};

const currentPath = norm(location.pathname);
let matchedCurrent = false;

// Build options from existing links and preselect the current page
links.forEach(link => {
  const opt = document.createElement('option');
  opt.value = link.href;
  opt.textContent = link.textContent.trim();

  const linkPath = norm(new URL(link.getAttribute('href'), location.origin).pathname);
  if (linkPath === currentPath) {
    opt.selected = true;        // show current page name in the closed dropdown
    matchedCurrent = true;
  }

  select.appendChild(opt);
});

// If no link matches the current page, insert a disabled "Menu" placeholder at top
if (!matchedCurrent) {
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = 'Menu';
  placeholder.disabled = true;
  placeholder.selected = true;
  select.insertBefore(placeholder, select.firstChild);
}

label.appendChild(select);
nav.parentNode.insertBefore(label, nav.nextSibling);

// Navigate on selection
select.addEventListener('change', e => {
  const url = e.target.value;
  if (!url) return;
  // Avoid reload if selecting current page
  const toPath = norm(new URL(url, location.origin).pathname);
  if (toPath === currentPath) return;
  window.location.href = url;
});
});
