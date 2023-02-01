const urlParams = new URLSearchParams(window.location.search);
const addon = urlParams.get('r');

const title = document.querySelector('title');
const header = document.querySelector('.headerText');
const alt = document.querySelector('.headerAlt');

let content = addon.search('Skcolb') > 0 ? 'BLOCKS' : 'ITEMS';
var link = addon.replaceAll('_Skcolb', '').replaceAll('_Smeti', '');

header.href = 'content.html?c=' + link;
alt.href = 'content.html?c=' + link;

let type = addon.search('Skcolb') > 0 ? 'blocks' : 'items';

var menu = JSON.parse(JSON.stringify(menuList));
for(var i = 0; i < menu.length; i++){
  var match = menu[i].title.toLowerCase().replaceAll('!', '').replaceAll('-', '_').replaceAll('&', 'and').replaceAll(':', '').replaceAll("'", "").replaceAll(' ', '_');
  if(addon.toLowerCase()  == match + `_${type.split("").reverse().join().replaceAll(',', '')}`){
    title.textContent = `Craftrock | ${menu[i].title}`;
    header.textContent = `HOME < ${menu[i].title.toUpperCase()} < ${content} INFO`
  }
}
var list = addon.replaceAll('_Skcolb', '').replaceAll('_Smeti', '').toLowerCase();
var info = JSON.parse(JSON.stringify(addon.search('Skcolb') > 0 ? eval(`${list}_blocks`) : eval(`${list}_items`)));

var cc = document.querySelector('.cellCollection');
var it = document.querySelector('.infoText');
if(addon.search('Skcolb') > 0){//do blocks
  var newName = document.createElement('pre');
  newName.id = 'name';
  newName.textContent = 'Name: ';
  it.appendChild(newName);
  var newCategory = document.createElement('pre');
  newCategory.id = 'category';
  newCategory.textContent = 'Category: ';
  it.appendChild(newCategory);
  var newOrientation = document.createElement('pre');
  newOrientation.id = 'orientation';
  newOrientation.textContent = 'Orientation: ';
  it.appendChild(newOrientation);
  var newFlammable = document.createElement('pre');
  newFlammable.id = 'flammable';
  newFlammable.textContent = 'Flammable: ';
  it.appendChild(newFlammable);
  var newLight = document.createElement('pre');
  newLight.id = 'light';
  newLight.textContent = 'Light: ';
  it.appendChild(newLight);
  var newExplosionres = document.createElement('pre');
  newExplosionres.id = 'explosionres';
  newExplosionres.textContent = 'Explosion Resistance: ';
  it.appendChild(newExplosionres);
  var newMinetime = document.createElement('pre');
  newMinetime.id = 'minetime';
  newMinetime.textContent = 'Mining Time: ';
  it.appendChild(newMinetime);
  var newDescription = document.createElement('pre');
  newDescription.id = 'description';
  newDescription.textContent = 'Description: ';
  it.appendChild(newDescription);
}
else{//do items
  var newName = document.createElement('pre');
  newName.id = 'name';
  newName.textContent = 'Name: ';
  it.appendChild(newName);
  var newMaxStack = document.createElement('pre');
  newMaxStack.id = 'maxstack';
  newMaxStack.textContent = 'Max Stack: ';
  it.appendChild(newMaxStack);
  var newOffhand = document.createElement('pre');
  newOffhand.id = 'offhand';
  newOffhand.textContent = 'Offhand: ';
  it.appendChild(newOffhand);
  var newExplodeable = document.createElement('pre');
  newExplodeable.id = 'explodeable';
  newExplodeable.textContent = 'Explodeable: ';
  it.appendChild(newExplodeable);
  var newFlammable = document.createElement('pre');
  newFlammable.id = 'flammable';
  newFlammable.textContent = 'Flammable: ';
  it.appendChild(newFlammable);
  var newCooldown = document.createElement('pre');
  newCooldown.id = 'cooldown';
  newCooldown.textContent = 'Cooldown: ';
  it.appendChild(newCooldown);
  var newNutrition = document.createElement('pre');
  newNutrition.id = 'nutrition';
  newNutrition.textContent = 'Nutrition: ';
  it.appendChild(newNutrition);
  var newDurability = document.createElement('pre');
  newDurability.id = 'durability';
  newDurability.textContent = 'Durability: ';
  it.appendChild(newDurability);
  var newDamage = document.createElement('pre');
  newDamage.id = 'damage';
  newDamage.textContent = 'Damage: ';
  it.appendChild(newDamage);
  var newArmor = document.createElement('pre');
  newArmor.id = 'armor';
  newArmor.textContent = 'Armor: ';
  it.appendChild(newArmor);
  var newGroup = document.createElement('pre');
  newGroup.id = 'category';
  newGroup.textContent = 'Category: ';
  it.appendChild(newGroup);
  var newDescription = document.createElement('pre');
  newDescription.id = 'description';
  newDescription.textContent = 'Description: ';
  it.appendChild(newDescription);
}

for(var i = 0; i < info.length; i++){
  var newCell = document.createElement('div');
  newCell.classList.add('infoCell');
  newCell.textContent = info[i].name;
  cc.appendChild(newCell);
  
  var cells = document.getElementsByClassName('infoCell');
  var newCellImg = document.createElement('img');
  newCellImg.loading = 'lazy';
  newCellImg.src = `../images/crafting/${info[i].name.toLowerCase().replaceAll('-', '_').replaceAll(' ', '_').replaceAll("'", "")}.png`;
  cells[i].appendChild(newCellImg);
}
//selection
const cellButtons = document.querySelectorAll('div.infoCell');
cellButtons.forEach(btn =>{
  btn.addEventListener('click', event =>{
    for(var j = 0; j < info.length; j++){
      if(info[j].name == btn.textContent)
      { setValues(info[j]); }
    }
  });
});

//setting values
function setValues(clicked){
  if(addon.search('Skcolb') > 0){//do blocks values
    document.getElementById('name').textContent = `Name: ${clicked.name}`;
    document.getElementById('category').textContent = `Category: ${clicked.group}`;
    document.getElementById('orientation').textContent = `Orientation: ${clicked.orientation}`;
    document.getElementById('flammable').textContent = `Flammable: ${clicked.flammable ? 'Yes' : 'No'}`;
    document.getElementById('light').textContent = `Light: ${clicked.light}`;
    document.getElementById('explosionres').textContent = `Explosion Resistance: ${clicked.explosion_resistance}`;
    document.getElementById('minetime').textContent = `Mining Time: ${clicked.mining_time}`;
    document.getElementById('description').textContent = `Description: ${clicked.description}`;
  }
  else{//do items values
    document.getElementById('name').textContent = `Name: ${clicked.sub} ${clicked.name}`;
    document.getElementById('maxstack').textContent = `Max Stack: ${clicked.max_stack}`;
    document.getElementById('offhand').textContent = `Offhand: ${clicked.offhand ? 'Yes' : 'No'}`;
    document.getElementById('explodeable').textContent = `Explodeable: ${clicked.explodeable ? 'Yes' : 'No'}`;
    document.getElementById('flammable').textContent = `Flammable: ${clicked.flammable ? 'Yes' : 'No'}`;
    document.getElementById('cooldown').textContent = `Cooldown: ${clicked.cooldown}`;
    document.getElementById('nutrition').textContent = `Nutrition: ${clicked.nutrition == '' ? 'None' : clicked.nutrition}`;
    document.getElementById('durability').textContent = `Durability: ${clicked.durability == '' ? 'None' : clicked.durability}`;
    document.getElementById('category').textContent = `Category: ${clicked.group}`;
    document.getElementById('damage').textContent = `Damage: ${clicked.damage.length == 0 ? 'None' : '\n' + clicked.damage.toLocaleString().replaceAll(',', '\n')}`;
    document.getElementById('armor').textContent = `Armor: ${clicked.armor.length == 0 ? 'None' : '\n' + clicked.armor.toLocaleString().replaceAll(',', '\n')}`;
    document.getElementById('description').textContent = `Description: ${clicked.description}`;
  }
  
  //display images on the right
  var infoImages = document.querySelector('.infoImages');
  infoImages.innerHTML = '';
  if(clicked.model){
    var cellImgDiv = document.createElement('div');
    cellImgDiv.classList.add('infoItem');
    infoImages.appendChild(cellImgDiv);
    
    var imgDiv = document.getElementsByClassName('infoItem');
    var newInfImg = document.createElement('img');
    newInfImg.src = `../images/crafting/${clicked.name.toLowerCase().replaceAll(' ', '_').replaceAll("'", "")}_model.png`;
    imgDiv[0].appendChild(newInfImg);
    
    var cellImgDiv = document.createElement('div');
    cellImgDiv.classList.add('infoItem');
    infoImages.appendChild(cellImgDiv);
    
    var imgDiv = document.getElementsByClassName('infoItem');
    var newInfImg = document.createElement('img');
    newInfImg.src = `../images/crafting/${clicked.name.toLowerCase().replaceAll(' ', '_').replaceAll("'", "")}.png`;
    imgDiv[1].appendChild(newInfImg);
  }
  else{
    var cellImgDiv = document.createElement('div');
    cellImgDiv.classList.add('infoItem');
    infoImages.appendChild(cellImgDiv);
    
    var imgDiv = document.getElementsByClassName('infoItem');
    var newInfImg = document.createElement('img');
    newInfImg.src = `../images/crafting/${clicked.name.toLowerCase().replaceAll(' ', '_').replaceAll("'", "")}.png`;
    imgDiv[0].appendChild(newInfImg);
  }
}

//category selection
const catBtn = document.querySelectorAll('div.catBtn');
var ic = document.getElementsByClassName('infoCell');
const cats = [ 'all', 'construction', 'nature', 'items', 'equipment' ];
catBtn.forEach(cb => {
  cb.addEventListener('click', event => {
    for(var f = 0; f < catBtn.length; f++){
      catBtn[f].style.borderRight = 'none';
    }
    for(var v = 0; v < cats.length; v++){
      if(cb.id == cats[v]){
        cb.style.borderRight = 'var(--cellBorder) solid var(--container)';
        for(var i = 0; i < info.length; i++){
          if(info[i].group.toLowerCase() != cats[v])
          { ic[i].style.display = 'none'; }
          else
          { ic[i].style.display = 'inline-block'; }
        }
        if(cb.id == cats[0]){
          for(var i = 0; i < info.length; i++)
          { ic[i].style.display = 'inline-block'; }
        }
      }
    }
  });
});
catBtn[0].click();