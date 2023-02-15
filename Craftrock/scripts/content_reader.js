const urlParams = new URLSearchParams(window.location.search);
const addon = urlParams.get('c');

const title = document.querySelector('title');
const header = document.querySelector('.headerText');
header.textContent = 'HOME < ' + addon.replaceAll('.html', '').replaceAll('_', ' ').toUpperCase();

var blockLink = document.querySelector('.forBlocks');
var itemLink = document.querySelector('.forItems');

var link = addon.replaceAll('.html', '');

if(itemLink){
  itemLink.href = `recipes.html?r=${link}_Smeti`;
}

const menu = JSON.parse(JSON.stringify(menuList));
var contentSection = document.querySelector('.contentSection');

for(var i = 0; i < menu.length; i++){
  var match = menu[i].title.toLowerCase().replaceAll('!', '').replaceAll('-', '_').replaceAll('&', 'and').replaceAll(':', '').replaceAll("'", "").replaceAll(' ', '_');
  if(addon.toLowerCase()  == match){
    title.textContent = `Craftrock | ${menu[i].title}`;
    header.textContent = `HOME < ${menu[i].title.toUpperCase()}`;
    var contentSection = document.querySelector('.contentSection');
    if(menu[i].blocks && menu[i].crafting){
      var newA = document.createElement('a');
      newA.href = `recipes.html?r=${link}_Skcolb`;
      newA.classList.add('pageLink', 'forBlocks');
      contentSection.appendChild(newA);
      
      var fBlocks = document.querySelector('.forBlocks');
      
      var newDiv = document.createElement('div');
      var newP = document.createElement('p');
      newDiv.classList.add('linkImg', 'blocks');
      newP.classList.add('linkTitle');
      newP.textContent = 'BLOCKS RECIPES';
      fBlocks.appendChild(newDiv);
      fBlocks.appendChild(newP);
    }
    if(menu[i].items && menu[i].crafting){
      var newA = document.createElement('a');
      newA.href = `recipes.html?r=${link}_Smeti`;
      newA.classList.add('pageLink', 'forItems');
      contentSection.appendChild(newA);
      
      var fItems = document.querySelector('.forItems');
      
      var newDiv = document.createElement('div');
      var newP = document.createElement('p');
      newDiv.classList.add('linkImg', 'items');
      newP.classList.add('linkTitle');
      newP.textContent = 'ITEMS RECIPES';
      fItems.appendChild(newDiv);
      fItems.appendChild(newP);
    }
    if(menu[i].blocks){
      var newA = document.createElement('a');
      newA.href = `info.html?r=${link}_Skcolb`;
      newA.classList.add('pageLink', 'infBlocks');
      contentSection.appendChild(newA);
      
      var infBlocks = document.querySelector('.infBlocks');
      
      var newDiv = document.createElement('div');
      var newP = document.createElement('p');
      newDiv.classList.add('linkImg', 'blocks');
      newP.classList.add('linkTitle');
      newP.textContent = 'BLOCKS INFO';
      infBlocks.appendChild(newDiv);
      infBlocks.appendChild(newP);
    }
    if(menu[i].items){
      var newA = document.createElement('a');
      newA.href = `info.html?r=${link}_Smeti`;
      newA.classList.add('pageLink', 'infItems');
      contentSection.appendChild(newA);
      
      var infItems = document.querySelector('.infItems');
      
      var newDiv = document.createElement('div');
      var newP = document.createElement('p');
      newDiv.classList.add('linkImg', 'items');
      newP.classList.add('linkTitle');
      newP.textContent = 'ITEMS INFO';
      infItems.appendChild(newDiv);
      infItems.appendChild(newP);
    }
  }
}