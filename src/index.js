var button = document.getElementById('submit');
button.addEventListener('click', e => {
  e.preventDefault();
  fetch('/.netlify/functions/send')
    .then(() => {
      console.log('Message sent');
    })
    .catch(err => {
      console.log(err);
    });
});
