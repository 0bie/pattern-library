// import $ from 'jquery';
import { markup } from './template';

document.addEventListener('DOMContentLoaded', () => {
  // Add the template to the DOM
  const div = document.createElement('div');
  div.classList.add('mb6');
  markup ? div.innerHTML = markup : '';
  document.getElementById('view').appendChild(div);

  // hide/show nav contents on smaller viewports
  const toggleMobileNav = () => {
    const
      menuIcon = document.querySelector('.js-nav--a .icon--menu'),
      mobileNav = document.querySelector('.js-nav--a--sm'),
      rootElement = document.documentElement;
    if (mobileNav) {
      menuIcon.classList.add('isRemoved');
      mobileNav.classList.toggle('is-open');
      rootElement.classList.add('nav--a--is-active');
      mobileNav.setAttribute('aria-hidden','false');
    }
  };
  const showMobileNav = (() => { // eslint-disable-line no-unused-vars
    const
      menuIcon = document.querySelector('.js-nav--a .icon--menu');
    //   mainNav = document.querySelector('.js-nav--a');
    // Remove mainNav on smaller viewports
    // $(window).resize(() => {
    //   const breakpoint = 640;
    //   if ( $(window).width() <= breakpoint ){
    //     mainNav.classList.add('isRemoved');
    //   } else {
    //     mainNav.classList.remove('isRemoved');
    //   }
    // });
    menuIcon.addEventListener('click', toggleMobileNav, false);
  })();
  const hideMobileNav = (() => { // eslint-disable-line no-unused-vars
    const
      menuIcon = document.querySelector('.js-nav--a .icon--menu'),
      exitIcon = document.querySelector('.js-nav--a-icon--exit'),
      mobileNav = document.querySelector('.js-nav--a--sm'),
      rootElement = document.documentElement;
    exitIcon.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      menuIcon.classList.remove('isRemoved');
      rootElement.classList.remove('nav--a--is-active');
      mobileNav.setAttribute('aria-hidden','true');
    });
  })();
});