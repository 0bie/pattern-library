const items = [
  {image: 'black'},
  {image: 'blue'},
  {image: 'orange'},
  {image: 'yellow'},
  {image: 'black'},
  {image: 'blue'},
  {image: 'orange'},
  {image: 'yellow'}
];

export const markup = `<div class="cardlist-container">
  <header>
    <h1 class="txt--center" id="cardlist">Card List</h1>
  </header>
  <ul class="cardlist">
    ${items.map((item) => `<li class="cardlist-item js-cardlist-item">
        <div class="cardlist-content">
          <a class="cardlist-overlay" href="#"></a>
          <img src="assets/Cardlist/img/${item.image}.jpg" alt="Cardlist placeholder image"/>
          <div class="cardlist-options">
            <button class="btn btn--md">
              <svg class="icon icon--sm" role="img" aria-labelledby="title">
                <title>Favorite Icon</title>
                <desc>A favorite Icon </desc>
                <use xlink:href="#heart"></use>
              </svg>
            </button>
            <button class="btn btn--md">
              <svg class="icon icon--sm" role="img" aria-labelledby="title">
                <title>Share Icon</title>
                <desc>A social share Icon </desc>
                <use xlink:href="#share"></use>
              </svg>
            </button>
            <button class="btn btn--md">
              <svg class="icon icon--sm" role="img" aria-labelledby="title">
                <title>Ellipsis Icon</title>
                <desc>An ellipsis Icon </desc>
                <use xlink:href="#ellipses1"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="cardlist-desc">
          <h3>card title</h3>
          <h4>card subtitle / author</h4>
          <div>extra details<span>...</span></div>
        </div>
      </li>
    `).join('')}
  </ul>
</div>`;