const urlParams = new URLSearchParams(window.location.search);
const content = urlParams.get('addon');

var contentName = JSON.parse(JSON.stringify(addonsList));

for(var i = 0; i < contentName.length; i++){
  content == contentName[i].name.replaceAll(' ', '_').replaceAll('-', '_').replaceAll("'", "") ? document.querySelector('nav p').textContent = contentName[i].name : false;
}
var list = JSON.parse(JSON.stringify(eval(content.toLowerCase())));


var masonrySections = document.getElementsByClassName('masonry');
var count = 0;
for(var i = 0; i < list.length; i++){
  var newTile = document.createElement('div');
  newTile.classList.add('masonryTile');
  masonrySections[count].appendChild(newTile);
  count == 3 ? count = 0 : count++;
}
for(var i = 0; i < list.length; i++){
  var tiles = document.getElementsByClassName('masonryTile');
  var newImg = document.createElement('img');
  newImg.src = `../images/structures/${content.toLowerCase()}/${list[i].identifier}.png`;
  tiles[i].appendChild(newImg);
  
  var newHeading = document.createElement('h1');
  newHeading.textContent = list[i].name;
  tiles[i].appendChild(newHeading);
  
  var newIden = document.createElement('p');
  newIden.textContent = `${list[i].namespace}:${list[i].identifier}`;
  tiles[i].appendChild(newIden);
  count == 3 ? count = 0 : count++;
}

var cells = document.querySelectorAll('div.masonryTile');
var exit = document.querySelector('div.modalExit');
var modalWrapper = document.querySelector('div.modalWrapper');

var modalDownload = document.querySelector('a.modalDownload');
var modalTitle = document.getElementById('modalTitle');
var modalIdentifier = document.getElementById('modalIdentifier');
var modalDimension = document.getElementById('modalDimension');
var modalBiome = document.getElementById('modalBiome');
var modalEntities = document.getElementById('modalEntities');
var modalDescription = document.getElementById('modalDescription');
var modalImg = document.getElementsByClassName('modalImg')[0];
cells.forEach(btn => {//clicking masonry tiles open the modal
  btn.addEventListener('click', event => {
    document.querySelector(':root').style.setProperty('--scrollStatus', 'block');
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    modalWrapper.style.display = 'flex';
    for(var i = 0; i < list.length; i++){
      if(btn.querySelector('.masonryTile h1').textContent == list[i].name){
        modalTitle.textContent = list[i].name;
        modalIdentifier.textContent = `${list[i].namespace}:${list[i].identifier}`;
        modalBiome.textContent = list[i].biome.toLocaleString().replaceAll(',', '\n');
        modalDimension.textContent = list[i].dimension.toLocaleString().replaceAll(',', '\n');
        modalEntities.textContent = list[i].entities.toLocaleString().replaceAll(',', '\n');
        modalDescription.textContent = list[i].desc;
        modalImg.src = `../images/structures/${content.toLowerCase()}/${list[i].identifier}.png`;
        modalDownload.href = list[i].link;
      }
    }
  });
});

exit.addEventListener('click', event => {//clicking the return button of the modal will hide it
  document.querySelector(':root').style.setProperty('--scrollStatus', 'none');
  document.getElementsByTagName('html')[0].style.overflow = 'auto';
  modalWrapper.style.display = 'none';
});