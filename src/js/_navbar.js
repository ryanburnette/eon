'use strict';

var navbar = document.querySelector('.navbar');
var width = window.innerWidth;
var lastWidth;

if (navbar) {
  window.addEventListener('resize', function () {
    set();
  });
  set();
  addRevealer();
}

function set() {
  var width = window.innerWidth;
  var same = false;
  if (width === lastWidth) {
    same = true;
  }
  lastWidth = width;
  if (same) {
    return;
  }
  var minWidth = calculateMinWidth();
  if (width >= minWidth) {
    setDesktop();
  } else {
    setRevealed();
  }
}

function setDesktop() {
  navbar.classList.add('style-desktop');
  navbar.classList.remove('style-revealed');
  if (document.querySelector('.navbar-items-revealed')) {
    navItemsRevealed.remove();
  }
  revealed = false;
}

function setRevealed() {
  navbar.classList.remove('style-desktop');
  navbar.classList.add('style-revealed');
}

function calculateMinWidth() {
  var widths = [64];
  var h1 = document.querySelector('.header h1 a');
  if (h1) {
    widths.push(Math.round(h1.getBoundingClientRect().width));
  }
  var navItems = document.querySelectorAll('.navbar a');
  for (var i = 0; i < navItems.length; ++i) {
    widths.push(Math.round(navItems[i].getBoundingClientRect().width));
    widths.push(26);
  }
  var minWidth = widths.reduce(function (total, n) {
    return total + n;
  });
  if (minWidth <= 768) {
    return 769;
  }
  return minWidth;
}

function addRevealer() {
  var li = document.createElement('li');
  li.classList.add('revealer');
  var a = document.createElement('a');
  a.innerHTML = 'Menu';
  li.appendChild(a);
  navbar.querySelector('ul').appendChild(li);
  a.addEventListener('click', function () {
    toggleRevealed();
    setTimeout(function () {
      a.classList.remove('hover');
    }, 100);
  });
  a.addEventListener('mouseenter', function () {
    a.classList.add('hover');
  });
  a.addEventListener('mouseleave', function () {
    a.classList.remove('hover');
  });
}

var revealed = false;
var navItemsRevealed = document.createElement('div');
navItemsRevealed.classList.add('navbar-items-revealed');
navItemsRevealed.classList.add('section');
var container = document.createElement('div');
container.classList.add('container');
container.innerHTML = navbar.innerHTML;
container.querySelector('.revealer').remove();
navItemsRevealed.appendChild(container);
function toggleRevealed() {
  revealed = !revealed;
  if (revealed) {
    document
      .querySelector('.header')
      .insertAdjacentElement('afterend', navItemsRevealed);
    setTimeout(function () {
      navItemsRevealed.classList.add('fadein');
    }, 50);
  } else {
    navItemsRevealed.remove();
    navItemsRevealed.classList.remove('fadein');
  }
}
