// LOADER
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 1000);
  }
});

// THEME TOGGLE LOGIC
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateToggleIcon(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
  });
}

function updateToggleIcon(theme) {
  if (themeToggle) {
    themeToggle.innerHTML = theme === 'light' ? '🌙' : '☀️';
  }
}

// SCROLL ANIMATIONS (Subtle Fade In)
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .service-box, .testimonial-card, .section-header').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});

// To make them visible when in viewport
document.addEventListener('scroll', () => {
  document.querySelectorAll('.visible').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
});