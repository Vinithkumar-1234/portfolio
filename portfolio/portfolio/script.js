// ─── MOBILE MENU TOGGLE ───
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ─── ACTIVE NAV HIGHLIGHT ON SCROLL ───
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');

function highlightNav() {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      links.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.style.color = 'var(--accent)';
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNav);

// ─── NAV SHADOW ON SCROLL ───
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ─── CURRENT YEAR IN FOOTER ───
const footer = document.querySelector('footer p');
if (footer) {
  footer.textContent = `© ${new Date().getFullYear()} Vinith Kumar · Built with HTML, CSS & JavaScript`;
}
