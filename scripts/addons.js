var addons = JSON.parse(JSON.stringify(addonsList));

for(var i = 0; i < addons.length; i++){
  const container = document.querySelector('div.contentContainer');
  var newA = document.createElement('a');
  newA.classList.add('contentLink');
  newA.href = `content.html?addon=${addons[i].title.replaceAll('!', '').replaceAll('-', '_').replaceAll('&', 'and').replaceAll(':', '').replaceAll("'", "").replaceAll(' ', '_')}`;
  container.appendChild(newA);
  
  const link = document.querySelectorAll('a.contentLink');
  for(var j = 0; j < 2; j++){
    if(j == 0){
      var newTop = document.createElement('div');
      newTop.classList.add('contentTop');
      link[i].appendChild(newTop);
      
      const top = link[i].querySelector('div.contentTop');
      var newImgWrapper = document.createElement('div');
      newImgWrapper.classList.add('contentImgWrapper');
      newImgWrapper.style.backgroundImage = `url('images/content/${addons[i].title.toLowerCase().replaceAll('!', '').replaceAll('-', '_').replaceAll('&', 'and').replaceAll(':', '').replaceAll("'", "").replaceAll(' ', '_')}.png')`;
      top.appendChild(newImgWrapper);
      
      var newTitle = document.createElement('h1');
      newTitle.classList.add('contentTitle');
      newTitle.textContent = addons[i].title.toUpperCase();
      top.appendChild(newTitle);
    }
    else{
      var newBot = document.createElement('div');
      newBot.classList.add('contentBot');
      link[i].appendChild(newBot);
      
      const bot = link[i].querySelector('div.contentBot');
      var newDesc = document.createElement('p');
      newDesc.classList.add('contentShortDesc');
      newDesc.textContent = addons[i].desc;
      bot.appendChild(newDesc);
    }
  }
}