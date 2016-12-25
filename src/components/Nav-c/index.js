import $ from 'jquery';
import { markup } from './template';

document.addEventListener('DOMContentLoaded', () => {
  // Add the template to the DOM
  const div = document.createElement('div');
  div.classList.add('mb6');
  markup ? div.innerHTML = markup : '';
  document.getElementById('view').appendChild(div);

  // Nav-c: hide/show nav on smaller viewports
  const toggleMobileNav = (() => { // eslint-disable-line no-unused-vars
    const
      nav = document.querySelector('.js-Nav-c'),
      menuButton = document.querySelector('.js-Nav-c__menu'),
      navContainer = document.querySelector('.js-Nav-c__container'),
      rootElement = document.documentElement;
    nav.setAttribute('aria-hidden', 'true');
    menuButton.addEventListener('click', () => {
      navContainer.classList.toggle('is-open');
      rootElement.classList.toggle('Nav-c_is-open');
      // Remove mobile nav properties on larger viewports
      $(window).resize(() => {
        const breakpoint = 640;
        if ($(window).width() >= breakpoint){
          rootElement.classList.remove('Nav-c_is-open');
          navContainer.classList.remove('is-open');
        }
      });
      // Toggle hidden attribute on js-Nav-c
      if (navContainer.classList.contains('is-open') && navContainer.contains(nav)){
        nav.setAttribute('aria-hidden', 'false');
      } else if(!navContainer.classList.contains('is-open') && navContainer.contains(nav)){
        nav.setAttribute('aria-hidden', 'true');
      }
    });
  })();
});
