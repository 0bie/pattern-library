import { markup } from './template';
document.addEventListener('DOMContentLoaded', () => {
  // Add the template to the DOM
  const div = document.createElement('div');
  div.classList.add('mb6');
  markup ? div.innerHTML = markup : '';
  document.getElementById('view').appendChild(div);

  // Hide/show accordion sections
  const accordionSection = document.querySelectorAll('.js-accordion-section');
  const accordionContent = document.querySelectorAll('.js-accordion-content');
  if (accordionSection.length){
    [...accordionSection].forEach((section) => {
      section.addEventListener('click', () => {
        section.classList.toggle('accordion-section--active');
        [...accordionContent].forEach((content) => {
          // Toggle hidden attribute on each content section
          if (section.classList.contains('accordion-section--active') && section.contains(content)){
            content.setAttribute('aria-hidden', 'false');
          } else if (!section.classList.contains('accordion-section--active') && section.contains(content)){
            content.setAttribute('aria-hidden', 'true');
          }
        });
      });
    });
    [...accordionContent].forEach((content) => {
      content.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });
  }
});