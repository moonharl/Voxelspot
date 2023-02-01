const searchBar = document.getElementsByTagName('input')[0];
const placeholder = document.querySelector('div.contentPlaceholder');
var menu = JSON.parse(JSON.stringify(menuList));

searchBar.addEventListener('input', event => {
  let mainValue;
  var contentLink = document.querySelectorAll('.pageLink');
  var contentName = document.querySelectorAll('.linkTitle');
  let filter = searchBar.value.toUpperCase();
  for(var i=0; i < contentName.length; i++){
  console.log('here');
    mainValue = contentName[i].textValue || contentName[i].innerText;
    if(mainValue.toUpperCase().indexOf(filter) > -1)
    { contentLink[i].style.display=''; }
    else
    { contentLink[i].style.display='none'; }
  }
  var j = 0;
  for(var k=0; k < menu.length; k++){
    if(contentLink[k].style.display == 'none')
    { j++; };
    if(j == menu.length)
    { placeholder.style.display = 'flex'; }
    else
    { placeholder.style.display = 'none'; }
  }
});