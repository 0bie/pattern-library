import { markup } from './template';
document.addEventListener('DOMContentLoaded', () => {
  // Add the template to the DOM
  const div = document.createElement('div');
  div.classList.add('mb6');
  markup ? div.innerHTML = markup : '';
  document.getElementById('view').appendChild(div);

  // nav--b: show/hide nav contents on smaller viewports
  const showMobileNav = (() => { // eslint-disable-line no-unused-vars
    const menuIcon = document.querySelector('.nav--b--sm .icon--menu'),
          mobileNav = document.querySelector('.js-nav--b--sm'); // eslint-disable-line indent
    menuIcon.addEventListener('click', () => {
      mobileNav.classList.add('is-visible');
      mobileNav.setAttribute('aria-hidden','false');
    });
  })();
  const hideMobileNav = (() => { // eslint-disable-line no-unused-vars
    const exitIcon = document.querySelector('.js-nav--b-exitIcon'),
          mobileNav = document.querySelector('.js-nav--b--sm'); // eslint-disable-line indent
    exitIcon.addEventListener('click', () => {
      mobileNav.classList.remove('is-visible');
      mobileNav.setAttribute('aria-hidden', 'true');
    });
  })();
  const toggleNestedList = (() => { // eslint-disable-line no-unused-vars
    const navItem =  document.querySelector('.js-flyout-item'),
          nestedList =  document.querySelector('.js-flyout--nested'); // eslint-disable-line indent
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
  // hidden states for `.nav--b .flyout`
  const toggleFlyoutMenu = (() => { // eslint-disable-line no-unused-vars
    const flyoutMenu = document.querySelectorAll('.nav--b .flyout, .nav--b--sub .flyout'),
          navItem = document.querySelectorAll('.nav--b-item'); // eslint-disable-line indent
    [...navItem].forEach((item) => {
      [...flyoutMenu].forEach((menu) => {
        if (item.contains(menu)) {
          item.addEventListener('mouseover', () => {
            menu.setAttribute('aria-hidden', 'false');
          });
          item.addEventListener('mouseout', () => {
            menu.setAttribute('aria-hidden', 'true');
          });
        }
      });
    });
  })();
});