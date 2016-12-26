import $ from 'jquery';
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
          navList = document.querySelector('.js-nav--c-list'),
          menuButton = document.querySelector('.js-nav--c-menu'),
          rootElement = document.documentElement;
    navList.setAttribute('aria-hidden', 'true');
    menuButton.addEventListener('click', () => {
      nav.classList.toggle('nav--c--active');
      rootElement.classList.toggle('nav--c--active');
      // Remove mobile nav properties on larger viewports
      $(window).resize(() => {
        const breakpoint = 640;
        if ($(window).width() >= breakpoint){
          rootElement.classList.remove('nav--c--active');
          nav.classList.remove('nav--c--active');
        }
      });
      // Toggle hidden attribute on js-nav--c
      if (nav.classList.contains('nav--c--active') && nav.contains(navList)){
        navList.setAttribute('aria-hidden', 'false');
      } else if(!nav.classList.contains('nav--c--active') && nav.contains(navList)){
        navList.setAttribute('aria-hidden', 'true');
      }
    });
  })();
});
