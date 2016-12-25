const title = true;

export const markup = `<header>
  <h1 class="txt--center"  id="hero">Hero Image</h1>
</header>
<div class="hero-container">
  <section class="hero">
    ${title ?
      `<div class="hero-content">
        <span class="hero-subtitle">hero subtitle</span>
        <div class="pl1">
          <h1 class="hero-title">
            This is some placeholder text for a hero title
          </h1>
        </div>
        <div class="hero-cta">
          <svg class="icon" role="img" aria-labelledby="title" width="22" height="22">
          <use xlink:href=#globe></use>
          </svg>
          <span>Learn More</span>
        </div>
      </div>`
    : ''}
    <div class="hero-placeholder"></div>
  </section>
</div>`;