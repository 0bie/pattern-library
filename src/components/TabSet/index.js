import { markup } from './template';
import { toggleSiblingClass} from '../utils';

document.addEventListener('DOMContentLoaded', () => {
  // Add the template to the DOM
  const div = document.createElement('div');
  div.classList.add('mb6');
  markup ? div.innerHTML = markup : '';
  document.getElementById('view').appendChild(div);
  const handleTabs = () => {
    const tabItem = document.querySelectorAll('.js-tab-item');
    const tabSection = document.querySelectorAll('.js-tab-section');
    const tabTitle = document.querySelectorAll('.js-tab-title');
    if (tabItem && tabItem.length) {
      [...tabItem].forEach((item) => {
        item.addEventListener('click', (e) => {
          if (item.contains(e.target)) item.classList.add('tab-item--active');
          toggleSiblingClass(tabItem, 'tab-item--active');
          [...tabSection].forEach((section) => {
            item.contains(section) ?
            section.setAttribute('aria-hidden', 'false') :
            section.setAttribute('aria-hidden', 'true');
          });
          [...tabTitle].forEach((title) => {
            item.contains(title) ?
            title.setAttribute('tabindex', 0) : // eslint-disable-line no-magic-numbers
            title.setAttribute('tabindex', -1); // eslint-disable-line no-magic-numbers
          });
        }, false);
      });
    }
  };
  handleTabs();
});