

function forLoop(array){
  for (var i = 0; i < 25; i++) {
  array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0){
  console.log(n);
  n--;
  }
  return 'done';
}

function maybeTrue(array){
 return (array.length > 0) ? true : false;
}

function doWhileLoop(array){
  do {
    array.slice (0, array.length - 1);
  } while
    maybeTrue(array);
}