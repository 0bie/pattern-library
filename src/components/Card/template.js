const image = 'black';
const icon = false;

export const actions = [
  {icon: 'heart'},
  {icon: 'share'},
  {icon: 'ellipses'}
];

export const markup = `<header>
  <h1 class="txt--center" id="card">Card</h1>
</header>
<div class="card-container softShadow border">
  <div class="card">
    <div class="card-item">
      ${image ? `<img src="assets/Card/img/${image}.jpg" alt="Card placeholder image"/>` : ''}
      ${icon ? `<svg class="icon" role="img" aria-labelledby="title">
      <title>${icon} Icon</title>
      <desc>An ${icon} Icon </desc>
      <use xlink:href=#${icon}></use>
      </svg>`
      : ''}
    </div>
    <div class="p2">
      <h4>Card title</h4>
      <div>
        Cards provide context and an entry point to more robust information and views, and their content and quantity can vary greatly. Cards within a card collection can each contain a unique data set, such as a checklist with an action, a note with an action, and a note with a photo..<br/>
        - <a href="https://www.google.com/design/spec/components/cards.html#cards-usage">Google</a>
      </div>
    </div>
    <div class="card-footer flyout">
      <div class="content">
        ${actions.map((action) => `<button class="btn btn--md">
            <svg class="icon icon--md" role="img" aria-labelledby="title">
              <title>${action.icon} Icon</title>
              <desc>A ${action.icon} Icon </desc>
              <use xlink:href=#${action.icon}></use>
            </svg>
          </button>`).join('')}
      </div>
    </div>
  </div>
</div>`;
