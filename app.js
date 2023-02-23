const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');


window.addEventListener("load", function () {
  const loadingScreen = document.querySelector(".loading-screen");
  const mainContent = document.querySelector(".nabar");

  setTimeout(function () {
    loadingScreen.style.display = "none";
    mainContent.classList.add("show");
  }, 2000);
});


// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


const flowerSection = document.querySelector('#flower-section');
if (flowerSection) {
  const petals = flowerSection.querySelectorAll('.petal');
  petals.forEach(petal => {
    petal.addEventListener('mouseover', () => {
      petal.style.boxShadow = '0px 0px 20px rgba(255, 105, 180, 1)';
      petal.style.backgroundImage = `url("https://picsum.photos/id/${getRandomNumber(100, 150)}/50")`;
    });
    petal.addEventListener('mouseout', () => {
      petal.style.boxShadow = '0px 0px 20px rgba(255, 105, 180, 0.5)';
      petal.style.backgroundImage = 'none';
    });
    petal.addEventListener('click', () => {
      petal.style.boxShadow = '0px 0px 20px rgba(255, 105, 180, 0.5)';
      petal.style.backgroundImage = 'none';
    });
  });
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}






