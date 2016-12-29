import { markup } from './template';

document.addEventListener('DOMContentLoaded', () => {
  // Add the template to the DOM
  const div = document.createElement('div');
  div.classList.add('mb6');
  markup ? div.innerHTML = markup : '';
  document.getElementById('view').appendChild(div);

  // nav--c: hide/show nav on smaller viewports
  const toggleMobileNav = (() => { // eslint-disable-line no-unused-vars
    const nav = document.querySelector('.js-nav--c'),
          navList = document.querySelector('.js-nav--c-list'), // eslint-disable-line indent
          navItem = document.querySelectorAll('.js-nav--c .nav--c-item'), // eslint-disable-line indent
          menuButton = document.querySelector('.js-nav--c-menu'), // eslint-disable-line indent
          main = document.querySelector('.main'), // eslint-disable-line indent
          rootElement = document.documentElement, // eslint-disable-line indent
          breakpoint = 640; // eslint-disable-line indent
    rootElement.clientWidth < breakpoint ?
    navList.setAttribute('aria-hidden', 'true') :
    navList.setAttribute('aria-hidden', 'false');
    // Remove mobile nav properties on larger viewports
    window.addEventListener('resize', () => {
      if (rootElement.clientWidth > breakpoint) {
        main.classList.remove('nav--c--active');
        nav.classList.remove('nav--c--active');
        navList.setAttribute('aria-hidden', 'false');
      } else {
        !nav.classList.contains('nav--c--active') ?
        navList.setAttribute('aria-hidden', 'true') :
        navList.setAttribute('aria-hidden', 'false');
      }
    });
    menuButton.addEventListener('click', () => {
      nav.classList.toggle('nav--c--active');
      main.classList.toggle('nav--c--active');
      // Toggle hidden attribute on `nav--c-list`
      if (nav.classList.contains('nav--c--active') && nav.contains(navList)) {
        navList.setAttribute('aria-hidden', 'false');
      } else if (!nav.classList.contains('nav--c--active') && nav.contains(navList)) {
        navList.setAttribute('aria-hidden', 'true');
      }
    });
    // Prevent text flickering in safari due to transition on `.nav--c-item`
    [...navItem].forEach((item) => {
      if (rootElement.clientWidth < breakpoint) item.style.willChange = 'opacity';
      window.addEventListener('resize', () => {
        rootElement.clientWidth < breakpoint ?
        item.style.willChange = 'opacity' :
        item.removeAttribute('style');
      });
    });
  })();
});
