var list = JSON.parse(JSON.stringify(addonsList));
const urlParams = new URLSearchParams(window.location.search);
const addon = urlParams.get('addon');
const pageTitle = document.querySelector('.pageTitle');
const pageIcon = document.querySelector('.pageIcon');
const contentDescText = document.querySelector('.contentDescText');
const contentButtons = document.querySelector('.contentButtons');
const downloadSection = document.querySelector('.downloadSection');
for(var i = 0; i < list.length; i++){
  var match = list[i].title.replaceAll('!', '').replaceAll('-', '_').replaceAll('&', 'and').replaceAll(':', '').replaceAll("'", "").replaceAll(' ', '_');
  if(addon == match){
    console.log(list[i].title);
    pageTitle.textContent = list[i].title.toUpperCase();
    pageIcon.style.backgroundImage = `url('images/content/${list[i].title.toLowerCase().replaceAll('!', '').replaceAll('-', '_').replaceAll('&', 'and').replaceAll(':', '').replaceAll("'", "").replaceAll(' ', '_')}.png')`;
    contentDescText.textContent = list[i].full_desc;
    var masonry = document.querySelector('.masonrySec');
    if(list[i].gallery > 0){
      for(var h = 0; h < list[i].gallery; h++){
        var newImg = document.createElement('img');
        newImg.classList.add('masonryImg');
        newImg.src = `images/gallery/${match.toLowerCase()}/${h}.png`;
        masonry.appendChild(newImg);
      }
      addModal();
    }
    if(list[i].crafting){
      var newA = document.createElement('a');
      newA.href = `Craftrock/content.html?c=${addon}`;
      newA.classList.add('contentBtn', 'Bcrafting');
      contentButtons.appendChild(newA);
      
      var Bcrafting = document.querySelector('.Bcrafting');
      
      var newDiv = document.createElement('a');
      var newP = document.createElement('p');
      newDiv.classList.add('contentImg', 'craftingBtn');
      newP.classList.add('contentBtnText');
      newP.textContent = 'CRAFTING';
      Bcrafting.appendChild(newDiv);
      Bcrafting.appendChild(newP);
    }
    if(list[i].blocks){
      var newA = document.createElement('a');
      newA.href = `Craftrock/info.html?r=${addon}_Skcolb`;
      newA.classList.add('contentBtn', 'Bblocks');
      contentButtons.appendChild(newA);
      
      var Bblocks = document.querySelector('.Bblocks');
      
      var newDiv = document.createElement('a');
      var newP = document.createElement('p');
      newDiv.classList.add('contentImg', 'blocksBtn');
      newP.classList.add('contentBtnText');
      newP.textContent = 'BLOCKS';
      Bblocks.appendChild(newDiv);
      Bblocks.appendChild(newP);
    }
    if(list[i].items){
      var newA = document.createElement('a');
      newA.href = `Craftrock/info.html?r=${addon}_Smeti`;
      newA.classList.add('contentBtn', 'Bitems');
      contentButtons.appendChild(newA);
      
      var Bitems = document.querySelector('.Bitems');
      
      var newDiv = document.createElement('a');
      var newP = document.createElement('p');
      newDiv.classList.add('contentImg', 'itemsBtn');
      newP.classList.add('contentBtnText');
      newP.textContent = 'ITEMS';
      Bitems.appendChild(newDiv);
      Bitems.appendChild(newP);
    }
    if(list[i].entities){
      var newA = document.createElement('a');
      newA.href = `MC Menagerie/content.html?addon=${addon}`;
      newA.classList.add('contentBtn', 'Bentities');
      contentButtons.appendChild(newA);
      
      var Bentities = document.querySelector('.Bentities');
      
      var newDiv = document.createElement('a');
      var newP = document.createElement('p');
      newDiv.classList.add('contentImg', 'entitiesBtn');
      newP.classList.add('contentBtnText');
      newP.textContent = 'ENTITIES';
      Bentities.appendChild(newDiv);
      Bentities.appendChild(newP);
    }
    if(list[i].structures){
      var newA = document.createElement('a');
      newA.href = `Buildrock/content.html?addon=${addon}`;
      newA.classList.add('contentBtn', 'Bstructures');
      contentButtons.appendChild(newA);
      
      var Bstructures = document.querySelector('.Bstructures');
      
      var newDiv = document.createElement('a');
      var newP = document.createElement('p');
      newDiv.classList.add('contentImg', 'structuresBtn');
      newP.classList.add('contentBtnText');
      newP.textContent = 'STRUCTURES';
      Bstructures.appendChild(newDiv);
      Bstructures.appendChild(newP);
    }
    //creates download links
    if(list[i].res_link != ""){
      var newA = document.createElement('a');
      newA.target = '_blank';
      newA.href = list[i].res_link;
      newA.classList.add('downloadRes');
      downloadSection.appendChild(newA);
      
      var downRes = document.querySelector('.downloadRes');
      var newP = document.createElement('p');
      newP.textContent = 'DOWNLOAD RESOURCES!';
      downRes.appendChild(newP);
    }
    if(list[i].dat_link != ""){
      var newA = document.createElement('a');
      newA.target = '_blank';
      newA.href = list[i].dat_link;
      newA.classList.add('downloadDat');
      downloadSection.appendChild(newA);
      
      var downdat = document.querySelector('.downloadDat');
      var newP = document.createElement('p');
      newP.textContent = 'DOWNLOAD BEHAVIORS!';
      downdat.appendChild(newP);
    }
  }
}

function addModal(){
  var images = document.querySelectorAll('.masonryImg');
  var modal = document.querySelector('.imgModal');
  images.forEach(img => {
    img.addEventListener('click', event => {
      modal.style.display = 'flex';
      document.querySelector('.imgModalImage').src = img.src;
    });
  });
  
  modal.addEventListener('click', event => {
    modal.style.display = 'none';
    document.querySelector('.imgModalImage').src = '';
  });
}