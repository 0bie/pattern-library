const label = 'Radio Label';
export const markup = `<header>
  <h1 class="txt--center">Radio</h1>
</header>
<div class="p3">
  <label class="radio-container mb1">
    <input class="radio radio--sm hidden" type="radio" name="radio-sm" />
    <div><span class="radio-label">${label}</span></div>
  </label>
  <label class="radio-container mb1">
    <input class="radio radio--md hidden" type="radio" name="radio-md" />
    <div><span class="radio-label">${label}</span></div>
  </label>
  <label class="radio-container mb1">
    <input class="radio radio--lg hidden" type="radio" name="radio-lg" />
    <div><span class="radio-label">${label}</span></div>
  </label>
</div>`;