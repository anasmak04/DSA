let BuubleSort = (array) => {
    
  let swap;
  for (let i = 0; i < array.legth - 1; i++) {
    for (let j = i - 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        swap = array[i];
        array[i] = array[j];
        array[j] = swap;
      }
    }
  }

  return swap;
};

let array = [2, 9, 5, 4, 6, 89, 2, -8];
console.log(BubbleSort(array));
