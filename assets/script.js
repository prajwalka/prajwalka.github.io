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

/* Teaching cards */
(function() { 
  const MAX_COLS = 4; // cap columns for wide pages 

  function getCssVarPx(el, name) {
    const probe = document.createElement('div');
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.width = 'var(${name})';
    el.appendChild(probe);
    const val = probe.getBoundingClientRect().width;
    el.removeChild(probe);
    return val;
  }

  function setBalancedColumns(grid) {
    const n = grid.querySelectorAll('.teaching-card').length;
    if (!n) return;

    const style = getComputedStyle(grid);
    const gap =
      parseFloat(style.getPropertyValue('column-gap')) ||
      parseFloat(style.columnGap) ||
      parseFloat(style.getPropertyValue('gap')) ||
      parseFloat(style.gap) || 24;

    const containerWidth = grid.clientWidth;
    const minCard = getCssVarPx(grid, '--card-min') || 320;
    const maxFitByWidth = Math.floor((containerWidth + gap) / (minCard + gap));
    const maxFit = Math.min(MAX_COLS, Math.max(1, maxFitByWidth));

    const cols = pickCols(n, maxFit);
    grid.classList.remove('cols-1','cols-2','cols-3','cols-4');
    grid.classList.add('cols-' + cols);
  }

  function pickCols(n, maxFit) { 
    // Special case: 4 items → 2 columns if possible (2×2 looks best) 
    if (n === 4 && maxFit >= 2) return 2; 
    
    // Try 1..maxFit, prefer: 
    // 1) perfect fills (no remainder), else 
    // 2) last row with at least 2 items, else 
    // 3) smallest remainder; break ties by larger column count 
    
    let best = 1, bestScore = Infinity; 
    for (let c = 1; c <= maxFit; c++) { 
      const remainder = n % c; 
      const lastRowCount = remainder === 0 ? c : remainder; 
      let score = 0; 
      
      if (remainder === 0) { 
        score = 0; // perfect 
      }
      else if (lastRowCount === 1) { 
        score = 3; // avoid single item last row 
      } 
      else { 
        score = 1; // acceptable remainder 
      } 

      if (score < bestScore || (score === bestScore && c > best)) { 
        bestScore = score; 
        best = c; 
      } 
    } 
  return best; 
  } 

  function balanceAll() { 
    document.querySelectorAll('.teaching-grid').forEach(setBalancedColumns); 
  } 
  
  window.addEventListener('DOMContentLoaded', balanceAll); 
  window.addEventListener('resize', balanceAll); 
})();

(() => {
function setResearchCols() {
  const grid = document.querySelector('.research-grid');
  if (!grid) return;

  const count = grid.querySelectorAll('.research-card').length;
  const w = grid.clientWidth;

  // Base columns by width (adjust breakpoints to taste)
  let cols = w < 700 ? 1 : w < 1000 ? 2 : w < 1400 ? 3 : 4;

  // Avoid a single-card last row
  if (count % cols === 1) {
    if (cols > 2) cols -= 1;  // e.g., 4 -> 3 or 3 -> 2
    else cols = 2;            // if cols was 1, bump to 2
  }

  grid.classList.remove('cols-1', 'cols-2', 'cols-3', 'cols-4');
  grid.classList.add('cols-' + cols);
}

window.addEventListener('resize', setResearchCols);
document.addEventListener('DOMContentLoaded', setResearchCols);
})();

