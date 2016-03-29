function fizzbuzz(array) {
  for (var i = 0; i < array.length; i++) {
    if ((array[i] % 5 == 0) && (array[i] % 3 == 0))
      console.log(array[i], 'fizzbuzz');
    else if (array[i] % 3 == 0)
      console.log(array[i], 'fizz');
    else if (array[i] % 5 == 0)
      console.log(array[i], 'buzz');
    else {
      console.log(array[i], 'nada');
    }
  }
}

fizzbuzz([3,6,9,15,0]);
