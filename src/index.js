var button = document.getElementById('submit');
button.addEventListener('click', e => {
  e.preventDefault();
  console.log('clicked');
  fetch('/.netlify/lambda/send')
    .then(response => response.json())
    .then(data => console.log(data));
});
