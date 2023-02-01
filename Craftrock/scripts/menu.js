var menu = JSON.parse(JSON.stringify(menuList));

for(var i = 0; i < menu.length; i++){
  const section = document.querySelector('section.contentSection');
  var newA = document.createElement('a');
  newA.classList.add('pageLink');
  newA.href = 'content.html?c=' + menu[i].title.replaceAll('!', '').replaceAll('-', '_').replaceAll('&', 'and').replaceAll(':', '').replaceAll("'", "").replaceAll(' ', '_');
  newA.title = menu[i].title;
  section.appendChild(newA);
  
  const link = document.querySelectorAll('a.pageLink');
  
  var newDiv = document.createElement('div');
  newDiv.classList.add('linkImg');
  newDiv.style.backgroundImage = "url('../images/content/" + menu[i].title.toLowerCase().replaceAll('!', '').replaceAll('-', '_').replaceAll('&', 'and').replaceAll(':', '').replaceAll("'", "").replaceAll(' ', '_') + ".png')";
  link[i].appendChild(newDiv);
  
  var newP = document.createElement('p');
  newP.classList.add('linkTitle');
  newP.textContent = menu[i].title.toUpperCase();
  link[i].appendChild(newP);
}