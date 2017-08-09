function swap(first,last, array){
    let tmp = array[first];
    array[first] = array[last];
    array[last] = tmp;
}


function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort([23,42,4,16,8,5]));