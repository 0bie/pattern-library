const items = [
  {title: 'a', content: 'test'},
  {title: 'b'},
  {title: 'c'},
  {title: 'd'}
];
/**
 * Reference: https://www.w3.org/TR/wai-aria/roles, https://www.w3.org/TR/wai-aria/terms#def_accessibility_api
 * TODO: Keyboard navigation
 */

/* eslint-disable no-magic-numbers */
export const markup = `<header>
  <h1 class="txt--center">TabSet</h1>
</header>
<ul class="tab-list" role="tablist">
  ${items.map((item, i) => `<li class="tab-item js-tab-item" role="presentation">
    <h1 id=title${i + 1} class="tab-title js-tab-title" role="tab" aria-controls=section${i + 1} tabindex="-1">${item.title}</h1>
    <section id=section${i + 1} class="tab-section js-tab-section" aria-hidden="true" aria-labelledby=title${i + 1}>
      ${item.title ? `<h3 tabindex="0">Section ${item.title}</h3>` : ''}
      ${item.content ? `<div>${item.content}</div>` : ''}
    </section>
  </li>`).join('')}
</ul>`;
/* eslint-enable no-magic-numbers */