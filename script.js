const dialog = document.querySelector('[data-letter-dialog]');
const openLetter = document.querySelector('[data-open-letter]');
const closeLetter = document.querySelector('[data-close-letter]');

openLetter.addEventListener('click', () => dialog.showModal());
closeLetter.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  observer.observe(element);
});