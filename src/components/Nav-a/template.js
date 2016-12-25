const items = [
  {title: 'Home'},
  {title: 'Products'},
  {title: 'Research'},
  {title: 'Awards'},
  {title: 'White Papers'},
  {title: 'Contact'}
];

export const markup = `<header>
  <h1 class="txt--center" id="Navigation">Navigation</h1>
</header>
<div class="nav--a soft-shadow">
  <nav class="js-nav--a">
    <div class="icon icon--menu"><span></span></div>
    <a href="#" class="logo">
      <svg class="icon icon--lg" role="img" aria-labelledby="title">
        <title>Image Icon</title>
        <desc>An image icon for a logo</desc>
        <use xlink:href="#image1"></use>
      </svg>
      <h1 class="logo-text">Logo</h1>
    </a>
    <ul class="nav--a-list">
      ${items.map((item) => `<li class="nav--a-item"><a href="#">${item.title}</a></li>`).join('')}
    </ul>
  </nav>
</div>
<!--alternate navigation for smaller viewports -->
  <nav class="nav--a--sm js-nav--a--sm" aria-hidden="true">
    <div class="icon--exit js-nav--a-icon--exit"><span></span></div>
    <ul class="nav--a--sm-list">
      ${items.map((item) => `<li><a href="#">${item.title}</a></li>`).join('')}
    </ul>
  </nav>`;