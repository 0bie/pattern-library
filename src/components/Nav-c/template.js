const items = [
  {item: 'item 1'},
  {item: 'item 2'},
  {item: 'item 3'},
  {item: 'item 4'},
  {item: 'item 5'},
  {item: 'item 6'}
];

export const markup = `<div class="Nav-c__header js-Nav-c__container">
  <div class="Nav-c__container">
    <h1 class="logo">
      <a href="#">
        <svg class="icon icon--sm icon--logo" role="img" aria-labelledby="title">
          <title>Media Icon</title>
          <desc>An image Icon </desc>
          <use xlink:href="#media1"></use>
        </svg>
        <span>logo</span>
      </a>
    </h1>
    <form action="#" method="get" class="form">
      <label for="Nav-c__search" class="hidden">search</label>
      <div class="form__container">
        <input type="search" id="Nav-c__search" class="input" placeholder="Search">
      </div>
      <button class="btn">
        <svg class="icon icon--sm" role="img" aria-labelledby="title">
          <title>Search Icon</title>
          <desc>A search Icon </desc>
          <use xlink:href="#search1"></use>
        </svg>
        <span class="hidden">Search</span>
      </button>
    </form>
    <span class="menu js-Nav-c__menu"></span>
  </div>
  <div class="Nav-c__container">
    <nav class="Nav-c">
      <ul class="Nav-c__list js-Nav-c">
        ${items.map((item) => `<li class="Nav-c__item"><a href="#">${item.item}</a></li>`).join('')}
      </ul>
    </nav>
  </div>
</div>`;