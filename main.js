// It is always helpful to use comments in your code!

// var myNavLinks = document.getElementsByClassName('main-menu-labels');
//
// function toggleSubMenu() {
// 	this.nextElementSibling.classList.toggle('hide');
// }
//
// for (i = 0; i < myNavLinks.length; i++) {
// 	myNavLinks[i].addEventListener('click', toggleSubMenu);
// }

// Products Menu
var productsLink = document.getElementById('products-menu-label');

function toggleProductMenu() {
  this.nextElementSibling.classList.toggle('products-sub-menu');
}

for (i = 0; i < productsLink.length; i++) {
  productsLink[i].addEventListener('mouseenter', toggleProductMenu);
}


// Services Menu
var servicesLink = document.getElementById('services-menu-label');

function toggleServicesMenu() {
  this.nextElementSibling.classList.toggle('services-sub-menu');
}

for (i = 0; i < servicesLink.length; i++) {
  servicesLink[i].addEventListener('mouseenter', toggleServicesMenu);
}


// Company Menu
var companyLink = document.getElementById('company-menu-label');

function toggleCompanyMenu() {
  this.nextElementSibling.classList.toggle('company-sub-menu');
}

for (i = 0; i < companyLink.length; i++) {
  companyLink[i].addEventListener('mouseenter', toggleCompanyMenu);
}
