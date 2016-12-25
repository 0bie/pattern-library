const items = [
  {title: '', icon: 'image1'},
  {title: '', icon: 'inbox1'},
  {title: '', icon: 'graph1'},
  {title: '', icon: 'calendar1'},
  {title: '', icon: 'people1'}
];

export const markup = `<div>
  <header>
    <h1 class="txt--center">Sidebar</h1>
  </header>
  <ul class="sidebar sidebar--left flyout" id="js-sidebar">
    ${items.map(item => `<li class="sidebar-item">
      <button class="btn btn--md">
      ${item.icon ? `<svg class="icon icon--lg" role="img" aria-labelledby="title">
        <title>${item.icon} Icon</title>
        <desc>A ${item.icon} Icon </desc>
        <use xlink:href=#${item.icon}></use>
      </svg>` : ''}
      ${item.title ? `<span>${item.title}</span>` : ''}
      </button>
    </li>`).join('')}
  </ul>
  <Button class="btn btn--xl" id="js-sidebar-toggle">
    Toggle Sidebar
  </Button>
</div>`;