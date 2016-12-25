const image = false;
const icon = 'image1';
const footer = true;

export const markup = `<header>
  <h1 class="txt--center" id="media">Media</h1>
</header>
<div class="media-container hard-shadow">
  <div class="media">
    <div class="media-item">
      ${image ? `<img src="assets/Card/img/${image}.jpg" alt="Card placeholder image"/>` : ''}
      ${icon ? `<svg class="icon" role="img" aria-labelledby="title">
      <title>${icon} Icon</title>
      <desc>An ${icon} Icon </desc>
      <use xlink:href=#${icon}></use>
      </svg>`
      : ''}
    </div>
    <div class="media-content">
      <h4 class="media-title">media title</h4>
      <div class="media-desc">
        The content area on the right can contain any other objects. In this case, it contains text, but we could put lists, grids, or even other media objects inside.<br/>
        - <a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/">Nicole Sullivan</a>
      </div>
    </div>
    ${footer ?
    `<div class="media-footer flyout">
      <div class="content">
        media footer
      </div>
    </div>`
    : ''}
  </div>
</div>`;