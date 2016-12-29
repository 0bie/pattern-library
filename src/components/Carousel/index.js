import { markup } from './template';
document.addEventListener('DOMContentLoaded', () => {
  // Add the template to the DOM
  const div = document.createElement('div');
  div.classList.add('mb6');
  markup ? div.innerHTML = markup : '';
  document.getElementById('view').appendChild(div);

  // Navigate through carousel items
  /* eslint-disable no-magic-numbers */
  const next = document.querySelector('.js-carousel-next');
  const prev = document.querySelector('.js-carousel-prev');
  const carouselItems = document.querySelectorAll('.js-carousel-item');
  const amount = carouselItems.length;
  let counter = 0;
  let current = carouselItems[0]; // Sets the current carouselItem to the first li element within .Carousel__list
  // navigate() is used to determine what direction the user clicks
  const navigate = (direction) => {
    current.classList.remove('carousel-item--active');
    counter = counter + direction;
    // Check if the user clicks prev button & counter never goes below 0 or above the total amount of carouselItems present in the DOM
    if(direction === -1 && counter < 0){
      counter = amount - 1;
    }
    // Check if the user clicks next button & current returns a false value
    if(direction === 1 && !carouselItems[counter]){
      counter = 0;
    }
    current = carouselItems[counter];
    current.classList.add('carousel-item--active');
  };
  // Attach event listeners to the button elements within .carousel__buttons
  // 0 is passed as an argument when navigate() is called to show the first li element in '.carousel__list'
  next.addEventListener('click', () => {
    navigate(1);
  });
  prev.addEventListener('click', () => {
    navigate(-1);
  });
  navigate(0);
});