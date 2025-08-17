// ===== Mobile Menu =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navMenu.classList.toggle('show');
});
document.querySelectorAll('.nav-link').forEach(link =>
  link.addEventListener('click', () => navMenu.classList.remove('show'))
);

// ===== Scroll Spy (active nav link) =====
const sections = [...document.querySelectorAll('section[id]')];
const navLinks = [...document.querySelectorAll('.nav-link')];
const setActive = id => {
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
};
const spy = new IntersectionObserver((entries)=>{
  entries.forEach(e => { if(e.isIntersecting) setActive(e.target.id); });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0.01 });
sections.forEach(sec => spy.observe(sec));

// ===== Subtle reveal animations =====
const revealables = document.querySelectorAll('.card, .timeline-item, .hero-copy, .hero-media, .tags, .list');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.transform = 'translateY(0)';
      e.target.style.opacity = '1';
      io.unobserve(e.target);
    }
  });
},{threshold:0.12});
revealables.forEach(el=>{
  el.style.transform='translateY(12px)';
  el.style.opacity='0';
  el.style.transition='transform .5s ease, opacity .5s ease';
  io.observe(el);
});