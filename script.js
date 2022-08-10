const linksinternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  const topo = section.offsetTop;

  window.scrollTo({
    top:topo,
    behavior: 'smooth',
  });
}

linksinternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});