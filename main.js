let cloud = document.getElementById('cloud');
let sun = document.getElementById('sun');
let underground = document.getElementById('underground');
let text = document.getElementById('text');
let button = document.getElementById('button');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  cloud.style.left = value * 0.35 + 'px';
  sun.style.top = value * 0.60 + 'px';
  text.style.marginBottom = value * 1 + 'px';
  button.style.marginBottom = value * 1 + 'px';
})

swal("Project Maintenance !!!", "For better experience please rotate device landscape and use desktop mode!");

alert('All ideas in this project are protected by copyright 2022//--- license 240922/license/Reza')