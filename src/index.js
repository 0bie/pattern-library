/* eslint-disable no-unused-vars */
import Accordion from './components/Accordion';
import Button from './components/Button';
import Cardlist from './components/Cardlist';
import Carousel from './components/Carousel';
import Checkbox from './components/Checkbox';
import Nav_a from './components/Nav-a';
import Nav_b from './components/Nav-b';
import Nav_c from './components/Nav-c';
import Subscribe from './components/Subscribe';
import Card from './components/Card';
import Hero from './components/Hero';
import Media from './components/Media';
import List from './components/List';
import Icon from './components/Icon';
import Radio from './components/Radio';
import Tab from './components/TabSet';
import Menu from './components/Menu';
import Caret from './components/Caret';
import Sidebar from './components/Sidebar';
import { toggleNav, hideNav, showNav } from './components/utils';
/* eslint-enable no-unused-vars */

// Add sprite to DOM
const xhr = new XMLHttpRequest();
xhr.open('GET', 'assets/sprite.svg');
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) { // eslint-disable-line no-magic-numbers
    document.getElementById('sprite').innerHTML = xhr.responseText;
  }
};
xhr.send();