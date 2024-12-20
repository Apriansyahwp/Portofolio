// Navbar Fixed

window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// hamburger

const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navmenu.classList.toggle('hidden');
});

// drawer
document.querySelector('[data-drawer-target="drawer-bottom-example"]').addEventListener('click', function() {
  const drawer = document.getElementById('drawer-bottom-example');
  drawer.classList.remove('hidden');  
});
document.querySelector('[data-drawer-target="drawer-bottom-example-2"]').addEventListener('click', function() {
  const drawer = document.getElementById('drawer-bottom-example-2');
  drawer.classList.remove('hidden');  
});




