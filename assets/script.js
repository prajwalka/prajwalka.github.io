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
document.addEventListener('DOMContentLoaded', () => {
// Flag that JS is available (used for fallback CSS)
document.documentElement.classList.add('js');

  const headerEl = document.getElementById('header');
  const nav = headerEl?.querySelector('.header-content nav');
  if (!nav) return;

  // Prevent duplicate insertion if this runs twice
  if (headerEl.querySelector('.mobile-nav-select')) return;

  const links = Array.from(nav.querySelectorAll('a'));
  if (!links.length) return;

  const label = document.createElement('label');
  label.className = 'mobile-nav';
  label.setAttribute('aria-label', 'Site navigation');

  const select = document.createElement('select');
  select.className = 'mobile-nav-select';

  const norm = p => {
    if (!p) return '/';
    p = p.replace(/\/+$/, '');
    return p === '' ? '/' : p;
  };

  const currentPath = norm(location.pathname);
  let matchedCurrent = false;

  links.forEach(link => {
    const opt = document.createElement('option');
    opt.value = link.href;
    opt.textContent = link.textContent.trim();
    const linkPath = norm(new URL(link.getAttribute('href'), location.origin).pathname);
    if (linkPath === currentPath) {
      opt.selected = true;
      matchedCurrent = true;
    }
    select.appendChild(opt);
  });

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

  // Only now mark the header ready so CSS hides the original nav
  headerEl.classList.add('mobile-nav-ready');

  // Recalculate body padding because header height changed
  adjustBodyPadding();

  select.addEventListener('change', e => {
    const url = e.target.value;
    if (!url) return;
    const toPath = norm(new URL(url, location.origin).pathname);
    if (toPath === currentPath) return;
    window.location.href = url;
  });
});



