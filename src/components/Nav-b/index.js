import { markup } from './template';
document.addEventListener('DOMContentLoaded', () => {
  // Add the template to the DOM
  const div = document.createElement('div');
  div.classList.add('mb6');
  markup ? div.innerHTML = markup : '';
  document.getElementById('view').appendChild(div);

  // nav--b: show/hide nav contents on smaller viewports
  const showMobileNav = (() => { // eslint-disable-line no-unused-vars
    const
      menuIcon = document.querySelector('.nav--b--sm .icon--menu'),
      mobileNav = document.querySelector('.js-nav--b--sm');
    menuIcon.addEventListener('click', () => {
      mobileNav.classList.add('is-visible');
      mobileNav.setAttribute('aria-hidden','false');
    });
  })();
  const hideMobileNav = (() => { // eslint-disable-line no-unused-vars
    const
      exitIcon = document.querySelector('.js-nav--b-exitIcon'),
      mobileNav = document.querySelector('.js-nav--b--sm');
    exitIcon.addEventListener('click', () => {
      mobileNav.classList.remove('is-visible');
      mobileNav.setAttribute('aria-hidden', 'true');
    });
  })();
  const toggleNestedList = (() => { // eslint-disable-line no-unused-vars
    const
      navItem =  document.querySelector('.js-flyout-item'),
      nestedList =  document.querySelector('.js-flyout--nested');
    if(nestedList){
      nestedList.setAttribute('aria-hidden', 'true');
      navItem.addEventListener('click', () => {
        navItem.classList.toggle('is-active');
        // Toggle hidden attribute on nested nav
        if(navItem.classList.contains('is-active') && navItem.contains(nestedList)){
          nestedList.setAttribute('aria-hidden', 'false');
        } else if (!navItem.classList.contains('is-active') && navItem.contains(nestedList)){
          nestedList.setAttribute('aria-hidden', 'true');
        }
      });
      nestedList.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }
  })();
});