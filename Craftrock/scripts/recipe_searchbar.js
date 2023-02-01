const searchBar = document.getElementsByTagName('input')[0];
const placeholder = document.querySelector('div.contentPlaceholder');
var list = addon.replaceAll('_Skcolb', '').replaceAll('_Smeti', '').toLowerCase();
var menu = JSON.parse(JSON.stringify(eval(list)));

searchBar.addEventListener('input', event => {
  let mainValue;
  var contentLink = document.querySelectorAll('.pageLink');
  var contentName = document.querySelectorAll('.craftingTitle');
  let filter = searchBar.value.toUpperCase();
  for(var i=0; i < contentName.length; i++){
    mainValue = contentName[i].textValue || contentName[i].innerText;
    if(mainValue.toUpperCase().indexOf(filter) > -1)
    { contentLink[i].style.display=''; }
    else{ contentLink[i].style.display='none'; }
  }
  var j = 0;
  for(var k=0; k < contentLink.length; k++){
    if(contentLink[k].style.display == 'none')
    { j++; };
    if(j == contentLink.length)
    { placeholder.style.display = 'flex'; }
    else
    { placeholder.style.display = 'none'; }
  }
});