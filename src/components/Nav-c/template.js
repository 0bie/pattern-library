const items = [
  {item: 'home'},
  {item: 'products'},
  {item: 'research'},
  {item: 'awards'},
  {item: 'white papers'},
  {item: 'contact'}
];

export const markup = `<div class="js-nav--c">
  <div class="nav--c-container p1">
    <h1 class="logo">
      <a href="#">
        <svg class="icon icon--lg icon--logo" role="img" aria-labelledby="title">
          <title>Media Icon</title>
          <desc>An image Icon </desc>
          <use xlink:href="#image1"></use>
        </svg>
        <span class="logo-text">logo</span>
      </a>
    </h1>
    <form action="#" method="get" class="nav--c-form">
      <label for="nav--c-search" class="hidden">search</label>
      <input type="search" id="nav--c-search" class="input" placeholder="Search">
      <button class="btn soft-shadow">
        <svg class="icon icon--sm" role="img" aria-labelledby="title">
          <title>Submit Search</title>
          <desc>Search the website for specific information</desc>
          <use xlink:href="#search1"></use>
        </svg>
        <span class="hidden">Search</span>
      </button>
    </form>
    <button class="btn nav--c-menu js-nav--c-menu"></button>
  </div>
  <div class="nav--c-container">
    <nav class="nav--c">
      <ul class="nav--c-list js-nav--c-list">
        ${items.map((item) => `<li class="nav--c-item"><a href="#">${item.item}</a></li>`).join('')}
      </ul>
    </nav>
  </div>
</div>`;