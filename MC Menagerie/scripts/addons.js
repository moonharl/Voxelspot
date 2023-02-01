var addons = JSON.parse(JSON.stringify(addonsList));

const contentCenter = document.querySelector('.contentCenter');
for(var i = 0; i < addons.length; i++){
  var newContentCell = document.createElement('a');
  newContentCell.classList.add('cell');
  newContentCell.href = `content.html?addon=${addons[i].name.replaceAll(' ', '_').replaceAll('-', '_').replaceAll("'", "")}`;
  newContentCell.textContent = addons[i].name;
  contentCenter.appendChild(newContentCell);
}

const contentCell = document.getElementsByClassName('cell');
for(var i = 0; i < addons.length; i++){
  var newAuth = document.createElement('p');
  newAuth.classList.add('author');
  newAuth.textContent = `By ${addons[i].auth}`;
  contentCell[i].appendChild(newAuth);
}