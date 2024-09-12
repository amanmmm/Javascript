const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body'); // Get a single body element

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id; // Use camelCase for CSS properties
    }
    if (e.target.id === 'white') {
        body.style.backgroundColor = e.target.id; // Use camelCase for CSS properties
      }
      if (e.target.id === 'blue') {
        body.style.backgroundColor = e.target.id; // Use camelCase for CSS properties
      }
      if (e.target.id === 'yellow') {
        body.style.backgroundColor = e.target.id; // Use camelCase for CSS properties
      }
  });
});
