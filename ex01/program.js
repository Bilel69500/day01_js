function firstDuplicateValue(array) {
    for (let i = 0; i < array.length; i++) {
      if (array.indexOf(array[i]) !== i) {
        return array[i];
      }
    }
    return -1;
  }
  
  console.log(firstDuplicateValue( [ 1, 2, 3, 4, 5, 2]));