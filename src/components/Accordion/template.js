export const sections = [
  {title: 'Accordion Title 1', icon: 'image1', id: 'accordionTitle1'},
  {title: 'Accordion Title 2', icon: 'image1', id: 'accordionTitle2'},
  {title: 'Accordion Title 3', icon: 'image1', id: 'accordionTitle3'},
  {title: 'Accordion Title 4', icon: 'image1', id: 'accordionTitle4'}
];

export const markup = `<header>
  <h1 class="txt--center" id="accordion">Accordion</h1>
</header>
<div class="accordion-container border">
  <div class="accordion">
    ${sections.map((section) => `<section class="accordion-section js-accordion-section">
        <h3 class="accordion-title" id=${section.id}>
          ${section.title}
        </h3>
        <div class="accordion-content js-accordion-content" aria-hidden="true" aria-labelledby=${section.id}>
          <div class="media-container">
            <div class="media">
              <div class="media-item">
                <svg class="icon" role="img" aria-labelledby="title">
                  <title>${section.icon} Icon</title>
                  <desc>An ${section.icon}Icon </desc>
                  <use xlink:href=#${section.icon}></use>
                </svg>
              </div>
              <div class="media-content">
                <h4 class="media-title">Media title</h4>
                <div class="media-desc">
                  The content area on the right can contain any other objects. In this case, it contains text, but we could put lists, grids, or even other media objects inside.<br/>
                  - <a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/">Nicole Sullivan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`
    ).join('')}
  </div>
</div>`;