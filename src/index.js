var button = document.getElementById('submit');
button.addEventListener('click', e => {
  e.preventDefault();
  console.log('clicked');
  fetch('/.netlify/functions/send')
    .then(response => response.json())
    .then(data => console.log(data));
});

var buttonSendGrid = document.getElementById('submit-send-grid');
buttonSendGrid.addEventListener('click', e => {
  e.preventDefault();
  console.log('clicked');
  fetch('/.netlify/functions/send-grid')
    .then(response => response.json())
    .then(data => console.log(data));
});
