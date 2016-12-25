export const items = [
  {title: 'Carousel title 1', icon: 'image1'},
  {title: 'Carousel title 2', icon: 'image1'},
  {title: 'Carousel title 3', icon: 'image1'},
  {title: 'Carousel title 4', icon: 'image1'}
];

export const markup = `<header>
  <h1 class="txt--center" id="carousel">Carousel</h1>
</header>
<div class="carousel-container">
  <div class="carousel border">
    <ol>
      ${items.map((item) => `<li class="carousel-item js-carousel-item p2">
          <div class="media-container">
            <div class="media">
              <div class="media-item">
                <svg class="icon" role="img" aria-labelledby="title">
                  <title>{{icon}} Icon</title>
                  <desc>An ${item.icon} Icon </desc>
                  <use xlink:href=#${item.icon}></use>
                </svg>
              </div>
              <div class="media-content">
                <h4 class="media-title">${item.title}</h4>
                <div class="media-desc">
                The content area on the right can contain any other objects. In this case, it contains text, but we could put lists, grids, or even other media objects inside.<br/>
                - <a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/">Nicole Sullivan</a>
                </div>
              </div>
            </div>
          </div>
        </li>`).join('')}
    </ol>
  </div><!--/carousel-->
  <div class="carousel-controls border" style="border-top-width: 0;">
    <button class="btn btn--md js-carousel-prev">
      <svg class="icon icon--md" role="img" aria-labelledby="title">
        <title>Left Icon</title>
        <desc>A left direction Icon </desc>
        <use xlink:href="#arrowLeft1"></use>
      </svg>
    </button>
    <button class="btn btn--md js-carousel-next">
      <svg class="icon icon--md" role="img" aria-labelledby="title">
        <title>Right Icon</title>
        <desc>A right direction Icon </desc>
        <use xlink:href="#arrowRight1"></use>
      </svg>
    </button>
  </div><!--/carousel-controls-->
</div><!--/carousel-container-->`;