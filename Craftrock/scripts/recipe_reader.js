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
    header.textContent = `HOME < ${menu[i].title.toUpperCase()} < ${content} RECIPES`
  }
}
var list = addon.replaceAll('_Skcolb', '').replaceAll('_Smeti', '').toLowerCase();
const recipe = JSON.parse(JSON.stringify(eval(list)));

var types = ['crafting', 'stonecutting', 'smelting', 'brewing', 'smithing'];
var current = -1;
for(var i = 0; i < recipe.length; i++){
  if(recipe[i].genre == type){
    const container = document.querySelector('.contentSection'); 
    var newPanel = document.createElement('div');
    newPanel.classList.add('pageLink', 'recipePanel');
    container.appendChild(newPanel);
    current++;
    
    const panel = document.getElementsByClassName('pageLink');
    for(var j = 0; j < 2; j++)
    {
      var newLw = document.createElement('div');
      newLw.classList.add('linkWrapper');
      panel[current].appendChild(newLw);
      if(j == 0){
        var newP = document.createElement('p');
        newP.classList.add('craftingTitle');
        newP.textContent = recipe[i].result.replaceAll('_', ' ').toUpperCase();
        panel[current].getElementsByClassName('linkWrapper')[0].appendChild(newP);
      }
      else{
        var newtable = document.createElement('table');
        panel[current].getElementsByClassName('linkWrapper')[1].appendChild(newtable);
        const table = document.getElementsByTagName('table');
        var newTbody = document.createElement('tbody');
        table[current].appendChild(newTbody);
        const tbody = document.getElementsByTagName('tbody');
        for(var l = 0; l < 3; l++){
          var newTr = document.createElement('tr');
          tbody[current].appendChild(newTr);
        }
        for(var l = 0; l < 3; l++){
          const tr = document.getElementsByTagName('tbody')[current].getElementsByTagName('tr')[l];
          for(var m = 0; m < 5; m++){
            if(m == 3 && recipe[i].type == types[0]){
              var newTd = document.createElement('td');
              newTd.classList.add('process');
              tr.appendChild(newTd);
            }
            else if(m == 2 && recipe[i].type != types[0]){
              var newTd = document.createElement('td');
              newTd.classList.add('process');
              tr.appendChild(newTd);
            }
            else{
              var newTd = document.createElement('td');
              tr.appendChild(newTd);
            }
          }
        }
        
        const cell = document.getElementsByTagName('table')[current].getElementsByTagName('td');
        if(recipe[i].type == types[0]){
          if(recipe[i].pattern[0] != '') { cell[0].style.backgroundImage = "url('../images/crafting/" + recipe[i].pattern[0] + ".png')"; }
          if(recipe[i].pattern[1] != '') { cell[1].style.backgroundImage = "url('../images/crafting/" + recipe[i].pattern[1] + ".png')"; }
          if(recipe[i].pattern[2] != '') { cell[2].style.backgroundImage = "url('../images/crafting/" + recipe[i].pattern[2] + ".png')"; }
          if(recipe[i].pattern[3] != '') { cell[5].style.backgroundImage = "url('../images/crafting/" + recipe[i].pattern[3] + ".png')"; }
          if(recipe[i].pattern[4] != '') { cell[6].style.backgroundImage = "url('../images/crafting/" + recipe[i].pattern[4] + ".png')"; }
          if(recipe[i].pattern[5] != '') { cell[7].style.backgroundImage = "url('../images/crafting/" + recipe[i].pattern[5] + ".png')"; }
          cell[14].classList.add('empty');
          cell[4].classList.add('empty');
          cell[8].classList.add(types[0]);
          cell[9].style.backgroundImage = "url('../images/crafting/" + recipe[i].result + ".png')";
          var amt = document.createElement('span');
          amt.textContent = recipe[i].amount <= 1 ? '' : recipe[i].amount;
          amt.classList.add('resAmt');
          cell[9].appendChild(amt);
          if(recipe[i].pattern[6] != '') { cell[10].style.backgroundImage = "url('../images/crafting/" + recipe[i].pattern[6] + ".png')"; }
          if(recipe[i].pattern[7] != '') { cell[11].style.backgroundImage = "url('../images/crafting/" + recipe[i].pattern[7] + ".png')"; }
          if(recipe[i].pattern[8] != '') { cell[12].style.backgroundImage = "url('../images/crafting/" + recipe[i].pattern[8] + ".png')"; }
        }
        else if(recipe[i].type == types[1]){
          cell[0].classList.add('empty');
          cell[1].classList.add('empty');
          cell[2].classList.add('empty');
          cell[3].classList.add('empty');
          cell[4].classList.add('empty');
          cell[5].classList.add('empty');
          cell[6].style.backgroundImage = "url('../images/crafting/" + recipe[i].input + ".png')";
          cell[7].classList.add(types[1]);
          var amt = document.createElement('span');
          amt.textContent = recipe[i].amount <= 1 ? '' : recipe[i].amount;
          amt.classList.add('resAmt');
          cell[8].appendChild(amt);
          cell[8].style.backgroundImage = "url('../images/crafting/" + recipe[i].result + ".png')";
          cell[9].classList.add('empty');
          cell[10].classList.add('empty');
          cell[11].classList.add('empty');
          cell[13].classList.add('empty');
          cell[14].classList.add('empty');
        }
        else if(recipe[i].type == types[2]){
          for(var q = 0; q < recipe[i].intensity.length; q++){
            cell[q].style.backgroundImage = "url('../images/crafting/minecraft/" + recipe[i].intensity[q] + ".png')";
          }
          cell[0].classList.add('empty');
          cell[1].classList.add('empty');
          cell[2].classList.add('empty');
          cell[3].classList.add('empty');
          cell[4].classList.add('empty');
          cell[5].classList.add('empty');
          cell[6].style.backgroundImage = "url('../images/crafting/" + recipe[i].input + ".png')";
          cell[7].classList.add(types[2]);
          cell[8].style.backgroundImage = "url('../images/crafting/" + recipe[i].result + ".png')";
          cell[9].classList.add('empty');
          cell[10].classList.add('empty');
          cell[11].classList.add('empty');
          cell[13].classList.add('empty');
          cell[14].classList.add('empty');
        }
        else if(recipe[i].type == types[3]){
          cell[0].classList.add('empty');
          cell[2].classList.add('empty');
          cell[3].classList.add('empty');
          cell[4].classList.add('empty');
          cell[5].style.backgroundImage = "url('../images/crafting/" + recipe[i].reagent + ".png')";
          cell[6].style.backgroundImage = "url('../images/crafting/" + recipe[i].input + ".png')";
          cell[7].classList.add(types[3]);
          cell[8].style.backgroundImage = "url('../images/crafting/" + recipe[i].result + ".png')";
          cell[9].classList.add('empty');
          cell[10].classList.add('empty');
          cell[13].classList.add('empty');
          cell[14].classList.add('empty');
        }
        else if(recipe[i].type == types[4]){
          cell[0].classList.add('empty');
          cell[1].classList.add('empty');
          cell[2].classList.add('empty');
          cell[3].classList.add('empty');
          cell[4].classList.add('empty');
          cell[5].style.backgroundImage = "url('../images/crafting/" + recipe[i].template + ".png')";
          cell[6].style.backgroundImage = "url('../images/crafting/" + recipe[i].base + ".png')";
          cell[7].style.backgroundImage = "url('../images/crafting/" + recipe[i].modder + ".png')";
          cell[7].classList.remove('process');
          cell[8].classList.add('process', types[4]);
          cell[9].style.backgroundImage = "url('../images/crafting/" + recipe[i].result + ".png')";
          cell[10].classList.add('empty');
          cell[11].classList.add('empty');
          cell[12].classList.add('empty');
          cell[13].classList.add('empty');
          cell[14].classList.add('empty');
        }
      }
    }
  }
}