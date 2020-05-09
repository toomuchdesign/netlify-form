var button = document.getElementById('submit');
var input = document.getElementById('input');

button.addEventListener('click', e => {
  e.preventDefault();
  const value = input.value;
  if (!value) {
    return;
  }

  const data = {
    from: 'hi@andreacarraro.it',
    message: value,
  };

  fetch('/.netlify/functions/send', {
    body: JSON.stringify(data),
    method: 'POST',
  })
    .then(() => {
      console.log('Message sent');
    })
    .catch(err => {
      console.log(err);
    });
});
