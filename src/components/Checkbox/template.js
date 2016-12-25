const label = 'Checkbox Label';
export const markup = `<header>
  <h1 class="txt--center" id="checkbox">Checkbox</h1>
</header>
<div class="p3">
  <div class="mb3">
    <label class="checkbox-container mb1">
      <input class="checkbox checkbox--sm hidden" type="checkbox" name="check1" id="check1"/>
      <div>
        ${label ? `<span class="checkbox-label">${label}</span>` : ''}
      </div>
    </label>
    <label class="checkbox-container mb1">
      <input class="checkbox checkbox--md hidden" type="checkbox" name="check2" id="check2"/>
      <div>
        ${label ? `<span class="checkbox-label">${label}</span>` : ''}
      </div>
    </label>
    <label class="checkbox-container">
      <input class="checkbox checkbox--lg hidden" type="checkbox" name="check3" id="check3"/>
      <div>
        ${label ? `<span class="checkbox-label">${label}</span>` : ''}
      </div>
    </label>
  </div>
  <label class="checkbox-container mb1">
    <input class="checkbox checkbox--sm checkbox--circle hidden" type="checkbox" name="check4" id="check4"/>
    <div>
      ${label ? `<span class="checkbox-label">${label}</span>` : ''}
    </div>
  </label>
  <label class="checkbox-container mb1">
    <input class="checkbox checkbox--md checkbox--circle hidden" type="checkbox" name="check4" id="check4"/>
    <div>
      ${label ? `<span class="checkbox-label">${label}</span>` : ''}
    </div>
  </label>
  <label class="checkbox-container">
    <input class="checkbox checkbox--lg checkbox--circle hidden" type="checkbox" name="check5" id="check5"/>
    <div>
      ${label ? `<span class="checkbox-label">${label}</span>` : ''}
    </div>
  </label>
</div>`;