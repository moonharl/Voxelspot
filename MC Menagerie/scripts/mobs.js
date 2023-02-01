const urlParams = new URLSearchParams(window.location.search);
const content = urlParams.get('addon');

var mobs = JSON.parse(JSON.stringify(eval(`${content.toLowerCase().replaceAll('-', '').replaceAll('_', '').replaceAll(' ', '').replaceAll("'", "")}list`)));

for(var i = 0; i < mobs.length; i++){
  const cellContainer = document.querySelector('.cellContainer');
  var newCell = document.createElement('div');
  newCell.classList.add('cell');
  newCell.textContent = mobs[i].name;
  cellContainer.appendChild(newCell);
  
  var cell = document.getElementsByClassName('cell');
  var newCellImg = document.createElement('div');
  newCellImg.classList.add('cellImg');
  newCellImg.style.backgroundImage = mobs[i].variants == 1 ? `url('../images/entities/${content.toLowerCase().replaceAll('-', '_').replaceAll(' ', '_').replaceAll("'", "")}/${mobs[i].name.toLowerCase()}.png')` : `url('../images/entities/${content.toLowerCase().replaceAll('-', '_').replaceAll(' ', '_').replaceAll("'", "")}/${mobs[i].name.toLowerCase()}0.png')`;
  cell[i].appendChild(newCellImg);
}

const cellButtons = document.querySelectorAll('.cell');

cellButtons.forEach(btn => {
  btn.addEventListener('click', event => {
    remValues();
    for(var z = 0; z < mobs.length; z++){
      if(btn.textContent == mobs[z].name){
        setValues(mobs[z]);
      }
    }
  });
});

function remValues(){
  const loot = document.querySelectorAll('.lootItem');
  for (const elem of loot){ elem.remove(); }
  const weaknesses = document.querySelectorAll('.weaknessesList .listStat');
  for (const elem of weaknesses){ elem.remove(); }
  const immunities = document.querySelectorAll('.immunitiesList .listStat');
  for (const elem of immunities){ elem.remove(); }
}
var mobName = document.getElementById('mobName');
var mobIdentifier = document.getElementById('mobIdentifier');
var healthVal = document.getElementById('healthVal');
var damageVal = document.getElementById('damageVal');
var spawnVal = document.getElementById('spawnVal');
var targetVal = document.getElementById('targetVal');
var mobDisplay = document.getElementById('mobDisplay');
var mainDesc = document.getElementById('mainDesc');
function setValues(val){
  document.querySelector('.mobVariants').innerHTML = '';
  mobName.textContent = val.name;
  mobIdentifier.textContent = `${val.namespace}:${val.name.replaceAll('-', '_').replaceAll(' ', '_').toLowerCase()}`;
  healthVal.textContent = '';
  for(var i = 0; i < val.health.length; i++){
    healthVal.textContent = healthVal.textContent + `${val.health[i]}\n`;
  }
  damageVal.textContent = '';
  for(var i = 0; i < val.damage.length; i++){
    damageVal.textContent = damageVal.textContent + `${val.damage[i]}\n`;
  }
  targetVal.textContent = '';
  for(var i = 0; i < val.target.length; i++){
    targetVal.textContent = targetVal.textContent + `${val.target[i]}\n`;
  }
  mainDesc.textContent = val.desc;
  spawnVal.textContent = '';
  for(var i = 0; i < val.spawn.length; i++){
    spawnVal.textContent = spawnVal.textContent + `${val.spawn[i]}\n`;
  }
  
  for(var i = 0; i < val.weaknesses.length; i++){
    const weaknessesList = document.querySelector('.weaknessesList');
    var newWeakness = document.createElement('p');
    newWeakness.classList.add('listStat');
    newWeakness.textContent = val.weaknesses[i];
    weaknessesList.appendChild(newWeakness);
  }
  
  for(var i = 0; i < val.immunities.length; i++){
    const immunitiesList = document.querySelector('.immunitiesList');
    var newImmunity = document.createElement('p');
    newImmunity.classList.add('listStat');
    newImmunity.textContent = val.immunities[i];
    immunitiesList.appendChild(newImmunity);
  }
  
  for(var i = 0; i < val.variants; i++){
    const mobVariants = document.querySelector('.mobVariants');
    var newVariantCell = document.createElement('div');
    newVariantCell.classList.add('variantCell');
    newVariantCell.style.backgroundImage = val.variants == 1 ? `url('../images/entities/${content.toLowerCase().replaceAll('-', '_').replaceAll(' ', '_').replaceAll("'", "")}/${val.name.toLowerCase()}.png')` : `url('../images/entities/${content.toLowerCase().replaceAll('-', '_').replaceAll(' ', '_').replaceAll("'", "")}/${val.name.toLowerCase()}${i}.png')`;
    newVariantCell.textContent = `${val.name.toLowerCase()}${i}`;
    mobVariants.appendChild(newVariantCell);
  }
  const variantCells = document.querySelectorAll('.variantCell');
  variantCells.forEach(bBtn => {
    bBtn.addEventListener('click', event => {
      for(var i = 0; i < variantCells.length; i++){
        if(bBtn.textContent == variantCells[i].textContent){
          mobDisplay.style.backgroundImage = val.variants == 1 ? `url('../images/entities/${content.toLowerCase().replaceAll('-', '_').replaceAll(' ', '_').replaceAll("'", "")}/${val.name.toLowerCase()}.png')` : `url('../images/entities/${content.toLowerCase().replaceAll('-', '_').replaceAll(' ', '_').replaceAll("'", "")}/${val.name.toLowerCase()}${i}.png')`;
        }
      }
    })
  });
  variantCells[0].click();
  
  for(var i = 0; i < val.loot.length; i++){
    const lootStats = document.querySelector('.lootStats');
    var newLootItem = document.createElement('div');
    newLootItem.classList.add('lootItem');
    lootStats.appendChild(newLootItem);
  }
  const lootItems = document.querySelectorAll('.lootItem');
  for(var i = 0; i < val.loot.length; i++){
    var newP = document.createElement('p');
    newP.classList.add('lootName');
    newP.textContent = val.loot[i].item;
    lootItems[i].appendChild(newP);
    var newP = document.createElement('p');
    newP.classList.add('lootCount');
    newP.textContent = val.loot[i].amount;
    lootItems[i].appendChild(newP);
  }
}