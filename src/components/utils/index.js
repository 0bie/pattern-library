setTimeout(() => {
  document.documentElement.classList.add('js');
}, 1000); // eslint-disable-line no-magic-numbers

export const toggleSiblingClass =  (el, elClass) => {
  [...el].forEach((element) => {
    element.addEventListener('click', function() {
      for (let i= 0; i < el.length; i++) {
        // console.log(el[i]);
        if (el[i] !== this && el[i].classList.contains(elClass)) {
          el[i].classList.remove(elClass);
        }
      }
      this.classList.add(elClass);
    }, false);
  });
};