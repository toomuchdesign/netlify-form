var button = document.getElementById('submit');
button.addEventListener('click', e => {
  e.preventDefault();
  console.log('clicked');
  fetch('/.netlify/functions/send')
    .then(() => {
      console.log('Message sent');
    })
    .catch(err => {
      console.log(err);
    });
});

var buttonSendGrid = document.getElementById('submit-send-grid');
buttonSendGrid.addEventListener('click', e => {
  e.preventDefault();
  console.log('clicked');
  fetch('/.netlify/functions/send-grid')
    .then(() => {
      console.log('Message sent');
    })
    .catch(err => {
      console.log(err);
    });
});
