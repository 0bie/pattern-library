export const markup = `<header>
  <h1 class="txt--center">Menu</h1>
</header>
<nav class="mb2">
  <ul class="menu soft-shadow">
    <li class="menu-header">
      <span class="menu-title">Go to</span>
    </li>
    <li class="menu-item"><a href="#">Item 1</a></li>
    <li class="menu-item"><a href="#">Item 2</a></li>
    <li class="menu-item"><a href="#">Item 3</a></li>
    <li class="menu-item"><div class="divider"></div></li>
    <li class="menu-item"><a href="#">Item 4</a></li>
    <li class="menu-item"><a href="#">Item 5</a></li>
  </ul>
</nav>

<nav>
  <ul class="menu soft-shadow">
    <li class="menu-item">
        <svg class="icon icon--md" role="img" aria-labelledby="title" width="30" height="30">
          <title>Menu Icon</title>
          <desc>Sub navigation</desc>
          <use xlink:href="#menu"></use>
        </svg>
        <span>Menu</span>
    </li>
    <li class="menu-item"><div class="divider"></div></li>
    <li class="menu-item">
        <svg class="icon icon--md" role="img" aria-labelledby="title" width="30" height="30">
          <title>Menu</title>
          <desc>Primary navigation</desc>
          <use xlink:href="#inbox1"></use>
        </svg>
        <a href="#">Inbox</a>
    </li>
    <li class="menu-item">
        <svg class="icon icon--md" role="img" aria-labelledby="title" width="30" height="30">
          <title>Shopping Cart</title>
          <desc>Check the items in your cart</desc>
          <use xlink:href="#cart3"></use>
        </svg>
        <a href="#">My Bag</a>
    </li>
    <li class="menu-item">
        <svg class="icon icon--md" role="img" aria-labelledby="title" width="30" height="30">
          <title>Favorites</title>
          <desc>Check your favorite items</desc>
          <use xlink:href="#heart"></use>
        </svg>
        <a href="#">My Favorites</a>
    </li>
    <li class="menu-item"><div class="divider"></div></li>
    <li class="menu-item">
        <svg class="icon icon--md" role="img" aria-labelledby="title" width="30" height="30">
          <title>Settings</title>
          <desc>Adjust your email preferences</desc>
          <use xlink:href="#cog"></use>
        </svg>
        <a href="#">Settings</a>
    </li>
    <li class="menu-item">
        <svg class="icon icon--md" role="img" aria-labelledby="title" width="30" height="30">
          <title>Statistics</title>
          <desc>Review your current stats</desc>
          <use xlink:href="#graph1"></use>
        </svg>
        <a href="#">Statistics</a>
    </li>
    <li class="menu-item">
        <svg class="icon icon--md" role="img" aria-labelledby="title" width="30" height="30">
          <title>Calendar</title>
          <desc>Organize your schedule</desc>
          <use xlink:href="#calendar2"></use>
        </svg>
        <a href="#">My Calendar</a>
    </li>
  </ul>
</nav>`;