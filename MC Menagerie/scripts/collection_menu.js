const cb = document.getElementsByClassName('collectionButton')[0];
const cs = document.getElementsByClassName('collectionSection')[0];
var screen = document.querySelector('html');
var btnStatus = 0;
cb.addEventListener('click', event => {
  let width = screen.clientWidth;
  if(btnStatus == 0){
    cs.style.left = '0';
    cb.style.left = width > 580 ? '40vw' : '60vw';
    cb.textContent = '<';
    cb.style.filter = 'hue-rotate(225deg)';
    btnStatus++;
  }
  else{
    cs.style.left = '-60vw';
    cb.style.left = '0';
    cb.textContent = '>';
    cb.style.filter = 'none';
    btnStatus--;
  }
});

window.addEventListener('resize', event => {
  if(screen.clientWidth <= 580 && btnStatus == 1){
    cb.click();
  }
});