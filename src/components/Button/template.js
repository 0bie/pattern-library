export const markup = `<header>
  <h1 class="txt--center" id="Button">Button</h1>
</header>
<section class="p2">
  <div class="mb2">
    <button class="btn btn--sm">Button-sm</button>
    <button class="btn btn--md">Button-md</button>
    <button class="btn btn--lg">Button-lg</button>
    <button class="btn btn--sm btn--raised">
      <svg class="icon icon--sm vertical--mid" role="img" aria-labelledby="title" width="30" height="30">
        <title>Inbox Icon</title>
        <desc>Check your mail</desc>
        <use xlink:href="#inbox2"></use>
      </svg>
      Button-sm
    </button>
    <button class="btn btn--md btn--raised">
      <svg class="icon icon--sm vertical--mid" role="img" aria-labelledby="title" width="30" height="30">
        <title>Inbox Icon</title>
        <desc>Check your mail</desc>
        <use xlink:href="#inbox2"></use>
      </svg>
      Button-md
    </button>
    <button class="btn btn--lg btn--raised">
      <span>Button-lg</span>
      <svg class="icon icon--sm vertical--mid" role="img" aria-labelledby="title" width="30" height="30">
        <title>Inbox Icon</title>
        <desc>Check your mail</desc>
        <use xlink:href="#inbox2"></use>
      </svg>
    </button>
  </div>
  <button class="btn btn--xl">Button-xl</button>

  <header>
    <h1 class="txt--center mt2 mb2">Groups</h1>
  </header>
  <div class="btngroup--inline mb2">
    <button class="btn btn--md">Inline</button>
    <button class="btn btn--md">Inline</button>
    <button class="btn btn--md">Inline</button>
  </div>
  <div class="btngroup--block">
    <button class="btn btn--md">Block</button>
    <button class="btn btn--md">Block</button>
    <button class="btn btn--md">Block</button>
  </div>

  <header>
    <h1 class="txt--center mt2 mb2">Shapes</h1>
  </header>
  <button class="btn btn--sm pill">Button-sm</button>
  <button class="btn btn--md btn--raised pill">Button-md</button>
  <button class="btn btn--lg pill">Button-lg</button>
  <button class="btn btn--lg btn--circle">
    <svg class="icon icon--sm vertical--mid" role="img" aria-labelledby="title" width="30" height="30">
      <title>Inbox Icon</title>
      <desc>Check your mail</desc>
      <use xlink:href="#inbox2"></use>
    </svg>
  </button>

  <header>
    <h1 class="txt--center mt2 mb2">States</h1>
  </header>
  <button class="btn btn--md btn--loading p2"></button>
  <button class="btn btn--md btn--disabled">Disabled</button>
  <button class="btn btn--md btn--disabled">
    <svg class="icon icon--sm vertical--mid" role="img" aria-labelledby="title" width="30" height="30">
      <title>Search Icon</title>
      <desc>A Search Icon </desc>
      <use xlink:href="#trash3"></use>
    </svg>
    <span class="vertical--mid">Disabled</span>
  </button>
</section>`;