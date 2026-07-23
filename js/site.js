const studyData = [...document.querySelectorAll('[data-study]')].map((el) => ({
  number: Number(el.dataset.study),
  id: el.id,
  label: `Study ${toRoman(Number(el.dataset.study))}`,
  el
}));

function toRoman(num) {
  const values = [[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
  let result = '';
  for (const [value, symbol] of values) {
    while (num >= value) { result += symbol; num -= value; }
  }
  return result;
}

function fillStudyLinks(container) {
  studyData.forEach((study) => {
    const link = document.createElement('a');
    link.href = `#${study.id}`;
    link.textContent = study.label;
    link.dataset.studyLink = study.number;
    container.appendChild(link);
  });
}

document.querySelectorAll('.study-nav, .mobile-study-links').forEach(fillStudyLinks);

const workSummary = document.querySelector('[data-scroll-target="selected-work"]');
workSummary?.addEventListener('click', () => {
  setTimeout(() => document.querySelector('#selected-work').scrollIntoView({ behavior: 'smooth' }), 0);
});

const mobileButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
mobileButton?.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  mobileButton.setAttribute('aria-expanded', String(open));
  mobileButton.textContent = open ? 'Close' : 'Menu';
});
mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  mobileButton.setAttribute('aria-expanded', 'false');
  mobileButton.textContent = 'Menu';
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('[data-study-link]').forEach((link) => {
      link.classList.toggle('active', Number(link.dataset.studyLink) === Number(entry.target.dataset.study));
    });
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
studyData.forEach((study) => observer.observe(study.el));

const lightbox = document.querySelector('#lightbox');
const image = document.querySelector('#lightbox-image');
const title = document.querySelector('#lightbox-title');
const flowers = document.querySelector('#lightbox-flowers');
const note = document.querySelector('#lightbox-note');
const triggers = [...document.querySelectorAll('[data-lightbox]')];
let activeIndex = 0;

function openLightbox(index) {
  activeIndex = (index + triggers.length) % triggers.length;
  const trigger = triggers[activeIndex];
  const sourceImage = trigger.querySelector('img');
  image.src = trigger.dataset.src;
  image.alt = sourceImage?.alt || '';
  title.textContent = trigger.dataset.title || '';
  flowers.textContent = trigger.dataset.flowers || '';
  note.textContent = trigger.dataset.note || '';
  note.hidden = !trigger.dataset.note;
  if (!lightbox.open) lightbox.showModal();
}

triggers.forEach((trigger, index) => trigger.addEventListener('click', () => openLightbox(index)));
document.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
document.querySelector('.lightbox-prev')?.addEventListener('click', () => openLightbox(activeIndex - 1));
document.querySelector('.lightbox-next')?.addEventListener('click', () => openLightbox(activeIndex + 1));
lightbox?.addEventListener('click', (event) => {
  const rect = lightbox.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) lightbox.close();
});
document.addEventListener('keydown', (event) => {
  if (!lightbox?.open) return;
  if (event.key === 'ArrowLeft') openLightbox(activeIndex - 1);
  if (event.key === 'ArrowRight') openLightbox(activeIndex + 1);
});

document.querySelector('#year').textContent = new Date().getFullYear();
