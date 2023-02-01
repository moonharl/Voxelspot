const modalTitle = document.getElementById('contentTitle');
const exitModal = document.getElementById('exitBtn');
const mainModal = document.getElementsByTagName('content')[0];
var contentName = document.querySelectorAll('.contentLink');
exitModal.addEventListener('click', event => {
  mainModal.style.display='none';
});

contentName.forEach(btn => {
  btn.addEventListener('click', event => {
    mainModal.style.display='flex';
    modalTitle.textContent=btn.textContent;
    console.log('test');
  });
});