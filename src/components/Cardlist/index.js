import $ from 'jquery';
import { markup } from './template';

document.addEventListener('DOMContentLoaded', () => {
  // Add the template to the DOM
  const div = document.createElement('div');
  div.classList.add('mb6');
  markup ? div.innerHTML = markup : '';
  document.getElementById('view').appendChild(div);
  // Check if cardlist is horizontal based on viewport width
  const breakpoint = 800, cardItem = document.querySelectorAll('.js-cardlist-item');
  if ($(window).width() >= breakpoint){
    [...cardItem].forEach(() => {
      [...cardItem].forEach((item) => {
        item.addEventListener('mouseenter', () => {
          item.classList.add('cardlist-item--active');
        });
      });
      [...cardItem].forEach((item) => {
        item.addEventListener('mouseleave', () => {
          item.classList.remove('cardlist-item--active');
        });
      });
    });
  } else {
    // Use click event for devices that don't recognize hover states
    const $cardItem = $('.js-cardlist-item');
    $cardItem.click(function() {
      $(this).addClass('cardlist-item--active').siblings().removeClass('cardlist-item--active');
    });
    $(document).click(function(e){
      if ($cardItem !== e.target && !$cardItem.has(e.target).length){
        $cardItem.removeClass('cardlist-item--active');
      }
    });
  }
});