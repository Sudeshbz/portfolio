// Animasyon uygulanacak elemanları seç
const animatedElements = document.querySelectorAll('.card, .slide-down, .slide-up');

function onScrollReveal() {
  const trigger = window.innerHeight * 0.8;

  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.classList.add('show');
    }
  });
}

// İlk yüklemede ve scroll'da kontrol et
window.addEventListener('scroll', onScrollReveal);
onScrollReveal();

// --- NAV: Aktif link vurgusu ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function setActiveLink() {
  let current = '';
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 120; // nav yüksekliği kadar offset
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) current = sec.getAttribute('id');
  });

  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
  });
}
window.addEventListener('scroll', setActiveLink);
setActiveLink();

// --- Mobil menü aç/kapat ---
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-links');

if (hamburger && navList) {
  hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

  // Linke tıklayınca menüyü kapat
  navLinks.forEach(a => a.addEventListener('click', () => {
    navList.classList.remove('show');
  }));
}