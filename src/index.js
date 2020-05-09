var inputEmail = document.getElementById('email');
var inputSpam = document.getElementById('mail');
var inputMessage = document.getElementById('message');
var button = document.getElementById('submit');
var REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;

function getValidationErrors({from, spam, message}) {
  const errors = [];
  if (!REGEX_EMAIL.test(from)) {
    errors.push('from');
  }

  if (spam) {
    errors.push('spam');
  }

  if (!message) {
    errors.push('message');
  }

  if (errors.length) {
    return errors;
  }
}

button.addEventListener('click', e => {
  e.preventDefault();
  const data = {
    from: inputEmail.value,
    spam: inputSpam.value,
    message: inputMessage.value,
  };

  if (getValidationErrors(data)) {
    console.log('Validation errors');
    return;
  }

  fetch('/.netlify/functions/send', {
    body: JSON.stringify(data),
    method: 'POST',
  })
    .then(response => {
      if (!response.ok) {
        throw response;
      }
    })
    .then(() => {
      console.log('Message sent');
    })
    .catch(err => {
      err.text().then(errorMessage => {
        console.log(errorMessage);
      });
    });
});
