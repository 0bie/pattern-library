import { markup } from './template';
document.addEventListener('DOMContentLoaded', () => {
  // Add the template to the DOM
  const div = document.createElement('div');
  div.classList.add('mb6');
  markup ? div.innerHTML = markup : '';
  document.getElementById('view').appendChild(div);
  const sidebar = document.getElementById('js-sidebar');
  const toggleBtn = document.getElementById('js-sidebar-toggle');
  toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar--active');
  });
});