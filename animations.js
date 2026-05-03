// ===== SPE INDHAN 2K23 - Shared Animations =====

// Nav scroll effect
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav toggle
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  // Add reveal class to cards automatically
  document.querySelectorAll('.card').forEach((card, i) => {
    card.classList.add('reveal');
    card.classList.add(`delay-${(i % 6) + 1}`);
  });

  // Add reveal to team cards
  document.querySelectorAll('.team-card').forEach((card, i) => {
    card.classList.add('reveal-scale');
    card.classList.add(`delay-${(i % 6) + 1}`);
  });

  // Add reveal to contact boxes and event detail sections
  document.querySelectorAll('.contact-box').forEach((el, i) => {
    el.classList.add('reveal-left');
    el.classList.add(`delay-${(i % 3) + 1}`);
  });

  // Observe all reveal elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .section-divider').forEach(el => {
    observer.observe(el);
  });

  // Section headers reveal
  document.querySelectorAll('.section-header').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // Page header reveal
  document.querySelectorAll('.page-header h1, .page-header p').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  });
});
