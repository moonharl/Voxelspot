const hov = document.querySelector('div.hoverModal');

document.body.onpointermove = event => {
  const { clientX, clientY } = event;
  hov.style.left = `${clientX}px`;
  hov.style.top = `${clientY}px`;
};

var ing = document.querySelectorAll('td:not(.empty):not(.process)');
var ingImg = document.getElementById('hoverImg');
var ingSpan = document.getElementById('hoverSpan');

ing.forEach(cell => {
  cell.addEventListener('mouseenter', event => {
    hov.style.display = 'flex';
    ingImg.style.backgroundImage = cell.style.backgroundImage;
    ingSpan.textContent = cell.style.backgroundImage.replaceAll('url("../images/crafting/', '').replaceAll('.png")', '');
  });
  cell.addEventListener('mouseleave', event => {
    hov.style.display = 'none';
  });
});