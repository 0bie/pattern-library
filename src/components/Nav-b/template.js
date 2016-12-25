const social = [
  {name: 'facebook', link: '#'},
  {name: 'googleplus', link: '#'},
  {name: 'instagram', link: '#'},
  {name: 'twitter', link: '#'},
  {name: 'youtube', link: '#'}
];

const cities = [
  {name: 'Toronto', link: '#'},
  {name: 'Vancouver', link: '#'},
  {name: 'LA', link: '#'},
  {name: 'New York', link: '#'},
  {name: 'Paris', link: '#'},
  {name: 'Milan', link: '#'},
  {name: 'Vienna', link: '#'},
  {name: 'amsterdam', link: '#'},
  {name: 'Lagos', link: '#'}
];

export const markup = `<div class="soft-shadow p1 cf">
  <nav class="nav--b--sub">
    <ul>
      <li class="nav--b-item caret caret--bottom">
        <a href="#">follow us</a>
        <ul class="flyout" aria-hidden="true">
          ${social.map((platform) => `<li class="flyout-item">
              <a href=${platform.link}>
                <svg class="icon icon--md icon--${platform.name} mr1" role="img" aria-labelledby="title">
                  <title>${platform.name}</title>
                  <desc>Get up-to-date product information on ${platform.name}</desc>
                  <use xlink:href=#${platform.name}></use>
                </svg>
                Follow on ${platform.name}
              </a>
          </li>`).join('')}
        </ul>
      </li>
      <li class="nav--b-item"><a href="#">Sign In</a></li>
      <li class="nav--b-item"><a href="#">Help</a></li>
      <li class="nav--b-item"><a href="#">Checkout</a></li>
    </ul>
  </nav>

  <nav class="nav--b">
    <ul>
      <li class="nav--b-item">
        <a href="#">
          <svg class="icon icon--lg" role="img" aria-labelledby="title">
            <title>Media Icon</title>
            <desc>An image Icon </desc>
            <use xlink:href="#image1"></use>
          </svg>
          <h1 class="logo">Logo</h1>
        </a>
      </li>
      <li class="nav--b-item"><a href="#">Sale</a></li>
      <li class="nav--b-item caret caret--bottom">
        <a href="#">Stores</a>
        <ul class="flyout flyout--split" aria-hidden="true">
            ${cities.map((city) => `<li class="flyout-item">
              <a href=${city.link}>
                ${city.name}
              </a>
          </li>`).join('')}
        </ul>
      </li>
      <li class="nav--b-item"><a href="#">Women</a></li>
      <li class="nav--b-item"><a href="#">Men</a></li>
      <li class="nav--b-item"><a href="#">Boys</a></li>
      <li class="nav--b-item"><a href="#">Girls</a></li>
      <li class="nav--b-item"><a href="#">Toddlers</a></li>
    </ul>
  </nav>

  <nav class="nav--b--sm">
    <ul class="nav--b--sm-list">
      <li class="nav--b--sm-item mr2">
        <div class="icon icon--menu"><span></span></div>
      </li>
      <li class="nav--b--sm-item">
        <a href="#">
          <svg class="icon icon--lg" role="img" aria-labelledby="title">
            <title>Media Icon</title>
            <desc>An image Icon </desc>
            <use xlink:href="#image1"></use>
          </svg>
          <h1 class="logo">Company Logo</h1>
        </a>
      </li>
    </ul>

    <ul class="flyout js-nav--b--sm" aria-hidden="true">
      <li class="flyout-item js-nav--b-exitIcon p2" style="cursor: pointer;">
        <div class="icon--exit"><span></span></div>
        <span class="pl3">Close</span>
      </li>
      <li class="flyout-item">
        <a class="flyout-link" href="#">
          Women
        </a>
      </li>
      <li class="flyout-item">
        <a class="flyout-link" href="#">
          Men
        </a>
      </li>
      <li class="flyout-item">
        <a class="flyout-link" href="#">
          Boys
        </a>
      </li>
      <li class="flyout-item">
        <a class="flyout-link" href="#">
          Girls
        </a>
      </li>
      <li class="flyout-item">
        <a class="flyout-link" href="#">
          Toddlers
        </a>
      </li>
      <li class="flyout-item">
        <a class="flyout-link" href="#">
          Sale
        </a>
      </li>
      <li class="flyout-item js-flyout-item caret caret--right">
        <a class="flyout-link" href="#">
          Stores
        </a>
        <ul class="flyout--nested js-flyout--nested" aria-hidden="true">
          ${cities.map((city) => `<li class="flyout-item">
            <a class="flyout-link" href=${city.link}>
              ${city.name}
            </a>
          </li>`).join('')}
        </ul>
      </li>
      <li class="flyout-item p2">
        <div class="flex">
          ${social.map((platform) => `<a href="#" class="mr2">
            <svg class="icon icon--md icon--${platform.name}" role="img" aria-labelledby="title">
              <title>${platform.name}</title>
              <desc>Get up-to-date product information on ${platform.name}</desc>
              <use xlink:href=#${platform.name}></use>
            </svg>
          </a>`).join('')}
        </div>
      </li>
      <li class="flyout-item">
        <a class="flyout-link" href="#">
          Sign In
        </a>
      </li>
      <li class="flyout-item">
        <a class="flyout-link" href="#">
          Help
        </a>
      </li>
      <li class="flyout-item">
        <a class="flyout-link" href="#">
          Checkout
          <svg class="icon icon--sm" role="img" aria-labelledby="title">
            <title>Shopping Cart</title>
            <desc>View items in your shopping cart</desc>
            <use xlink:href=#cart4></use>
          </svg>
        </a>
      </li>
    </ul><!-- /flyout -->
  </nav><!-- /nav--b--sm -->
</div><!-- /nav--b-container -->`;