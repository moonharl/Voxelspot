const searchBar = document.getElementsByTagName('input')[0];

searchBar.addEventListener('input', event => {
  let mainValue;
  var contentLink = document.querySelectorAll('.infoCell');
  let filter = searchBar.value.toUpperCase();
  for(var i=0; i < contentLink.length; i++){
  console.log('here');
    mainValue = contentLink[i].textValue || contentLink[i].innerText;
    if(mainValue.toUpperCase().indexOf(filter) > -1){
      contentLink[i].style.display='';
    }
    else{
      contentLink[i].style.display='none';
    }
  }
});