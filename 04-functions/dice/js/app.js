// /**
//  * Creating a page where every time the user hits the "Roll Dice" button, the
//  * screen randomly updates the two dice. Use the html and css code included in
//  * the starter code folder to get started.

document.getElementById('roll-dice').onclick = function() {
  var random1 = Math.floor(Math.random() * (6 - 1) + 1);
  var random2 = Math.floor(Math.random() * (6 - 1) + 1);
  var classNames = ['dice-1', 'dice-2', 'dice-3', 'dice-4', 'dice-5', 'dice-6'];
  var firstDie = classNames[random1];
  var secondDie = classNames[random2];
  console.log('hit!');
  document.getElementById('first-die').className = firstDie;
  document.getElementById('second-die').className = secondDie;
};
