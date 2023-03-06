var modal = document.querySelector('div.modal');
var pageLink = document.querySelectorAll('div.pageLink');
var mainList = document.getElementById('ingredientsList');
var typesList = document.getElementById('typesList');

pageLink.forEach(rev => {
  rev.addEventListener('click', event => {
    modal.style.display = 'grid';
    document.body.style.overflow = 'hidden';
    var bago = Array.from(pageLink);
    var index = bago.indexOf(rev);
    
    document.getElementById('craftingResult').style.backgroundImage = `url('../images/crafting/${recipe[index].result}.png')`;
    
    if(recipe[index].type == 'crafting'){
      document.getElementById('craftingType').textContent = `${recipe[index].type} - ${recipe[index].tool}`;
      document.getElementById('craftingType').style.backgroundImage = `url('../images/crafting/${recipe[index].tool}.png')`;
      document.getElementById('craftingResult').textContent = `${recipe[index].amount} ----\t${recipe[index].result}`;
      var counts = {};
      var totalIngredients = recipe[index].pattern;
      totalIngredients.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
      var keys = Array.from(Object.keys(counts));
      for(var m = 0; m < keys.length; m++){
        if(keys[m] != ""){
          var newPre = document.createElement('pre');
          newPre.id = 'craftingIngredients';
          newPre.textContent = `${counts[keys[m]]} ----\t${keys[m]}`;
          newPre.style.backgroundImage = `url('../images/crafting/${keys[m]}.png')`;
          mainList.appendChild(newPre);
        }
      }
    }
    if(recipe[index].type == 'stonecutting'){
      document.getElementById('craftingType').textContent = `stonecutting - minecraft/stonecutter`;
      document.getElementById('craftingType').style.backgroundImage = `url('../images/crafting/minecraft/stonecutter.png')`;
      var newPre = document.createElement('pre');
      newPre.id = 'craftingIngredients';
      newPre.textContent = `${recipe[index].input}`;
      newPre.style.backgroundImage = `url('../images/crafting/${recipe[index].input}.png')`;
      mainList.appendChild(newPre);
      document.getElementById('craftingResult').textContent = recipe[index].result;
    }
    if(recipe[index].type == 'smelting'){
      document.getElementById('craftingType').textContent = '';
      for(var fm = 0; fm < recipe[index].intensity.length; fm++){
        var newPre = document.createElement('pre');
        newPre.textContent = `${recipe[index].type} - minecraft/${recipe[index].intensity[fm]}`;
        newPre.style.backgroundImage = `url('../images/crafting/minecraft/${recipe[index].intensity[fm]}.png')`;
        typesList.appendChild(newPre);
      }
      var newPre = document.createElement('pre');
      newPre.id = 'craftingIngredients';
      newPre.textContent = `${recipe[index].input}`;
      newPre.style.backgroundImage = `url('../images/crafting/${recipe[index].input}.png')`;
      mainList.appendChild(newPre);
      document.getElementById('craftingResult').textContent = recipe[index].result;
    }
    if(recipe[index].type == 'brewing'){
      document.getElementById('craftingType').textContent = `brewing - minecraft/brewing_stand`;
      document.getElementById('craftingType').style.backgroundImage = `url('../images/crafting/minecraft/brewing_stand.png')`;
      var newPre = document.createElement('pre');
      newPre.id = 'craftingIngredients';
      newPre.textContent = `Bottle - ${recipe[index].input}`;
      newPre.style.backgroundImage = `url('../images/crafting/${recipe[index].input}.png')`;
      mainList.appendChild(newPre);
      var newPre = document.createElement('pre');
      newPre.id = 'craftingIngredients';
      newPre.textContent = `Reagent - ${recipe[index].reagent}`;
      newPre.style.backgroundImage = `url('../images/crafting/${recipe[index].reagent}.png')`;
      mainList.appendChild(newPre);
      document.getElementById('craftingResult').textContent = recipe[index].result;
    }
    if(recipe[index].type == 'smithing'){
      document.getElementById('craftingType').textContent = `smithing - minecraft/smithing_table`;
      document.getElementById('craftingType').style.backgroundImage = `url('../images/crafting/minecraft/smithing_table.png')`;
      var newPre = document.createElement('pre');
      newPre.id = 'craftingIngredients';
      newPre.textContent = `Template - ${recipe[index].template}`;
      newPre.style.backgroundImage = `url('../images/crafting/${recipe[index].template}.png')`;
      mainList.appendChild(newPre);
      var newPre = document.createElement('pre');
      newPre.id = 'craftingIngredients';
      newPre.textContent = `Base - ${recipe[index].base}`;
      newPre.style.backgroundImage = `url('../images/crafting/${recipe[index].base}.png')`;
      mainList.appendChild(newPre);
      var newPre = document.createElement('pre');
      newPre.id = 'craftingIngredients';
      newPre.textContent = `Modifier - ${recipe[index].modder}`;
      newPre.style.backgroundImage = `url('../images/crafting/${recipe[index].modder}.png')`;
      mainList.appendChild(newPre);
      document.getElementById('craftingResult').textContent = recipe[index].result;
    }
  });
});

modal.addEventListener('dblclick', event => {
  modal.style.display = 'none';
  mainList.innerHTML = '';
  typesList.innerHTML = '';
  document.body.style.overflow = 'auto';
});