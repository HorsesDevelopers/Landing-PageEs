document.addEventListener("DOMContentLoaded", () => {
  // Animación de aparición
  const animatedEls = document.querySelectorAll(
    ".hero-content, .benefits-section, .features-section, .testimonials-section, .faq-section, .about, .footer, .team-photos"
  );
  animatedEls.forEach(el => el.classList.add("animate"));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedEls.forEach(el => observer.observe(el));

  // Scroll suave y animación de los enlaces del navbar
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        // Animación visual del enlace
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        setTimeout(() => this.classList.remove('active'), 800);
      }
    });
  });
});