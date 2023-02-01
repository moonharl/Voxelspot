const searchBar = document.getElementsByTagName('input')[0];
const placeholder = document.querySelector('div.contentPlaceholder');
var addons = JSON.parse(JSON.stringify(addonsList));

searchBar.addEventListener('input', event => {
  let mainValue;
  var contentLink = document.querySelectorAll('.contentLink');
  var contentName = document.querySelectorAll('.contentTitle');
  let filter = searchBar.value.toUpperCase();
  for(var i=0; i < contentName.length; i++){
  console.log('here');
    mainValue = contentName[i].textValue || contentName[i].innerText;
    if(mainValue.toUpperCase().indexOf(filter) > -1){
      contentLink[i].style.display='';
    }
    else{
      contentLink[i].style.display='none';
    }
  }
  var j = 0;
  for(var k=0; k < addons.length; k++){
    if(contentLink[k].style.display == 'none')
    { j++; };
    if(j == addons.length)
    { placeholder.style.display = 'flex'; }
    else
    { placeholder.style.display = 'none'; }
  }
});