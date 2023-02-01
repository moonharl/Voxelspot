var addons = JSON.parse(JSON.stringify(addonsList));

const addonCells = document.querySelector('.addonCells');
for(var i = 0; i < addons.length; i++){
  var newA = document.createElement('a');
  newA.href = `content.html?addon=${addons[i].name.replaceAll(' ', '_').replaceAll('-', '_').replaceAll("'", "")}`;
  addonCells.appendChild(newA);
  
  cells = document.querySelectorAll('.addonCells a');
  var newSpan = document.createElement('span');
  newSpan.classList.add('addonName');
  newSpan.textContent = addons[i].name;
  cells[i].appendChild(newSpan);
}