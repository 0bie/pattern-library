const items = [
  {title: 'Item 1'},
  {title: 'Item 2'},
  {title: 'Item 3'},
  {title: 'Item 4'},
  {title: 'Item 5'},
  {title: 'Item 6'}
];

export const markup = `<header>
  <h1 class="txt--center" id="list">List</h1>
</header>
<ul class="list">
  ${items.map(item => `<li class="list-item">${item.title}</li>`).join('')}
</ul>`;