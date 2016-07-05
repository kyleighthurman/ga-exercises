for (var number = 99; number > -1; number--) {
  if (number >= 2) {
    console.log(number, 'bottles of beer on the wall,', number, 'bottles of beer.', 'Take one down and pass it around,', number - 1, 'bottles of beer on the wall.');
  } else if (number === 1) {
    console.log(number, 'bottle of beer on the wall,', number, 'bottle of beer.', 'Take one down and pass it around, no more bottles of beer on the wall.');
  } else {
    console.log('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.');
  }
}
