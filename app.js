const messages = require('./messages.js');

for(let i = 0; i < 1; i++) {
    // get a random number between 0 and the length of the messages array
    let randomIndex = Math.floor(Math.random() * messages.length);
  console.log(messages[randomIndex]);
}

const check = (messages) => {

}