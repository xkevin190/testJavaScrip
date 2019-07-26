function search(array, num) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === num) return true;
  }
  return false;
}

const array = [, 2, 3, 4, 5, 6, 7, 8, 9];

search(array, 5);
