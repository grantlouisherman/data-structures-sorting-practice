function swap(first, second, array){
    let tmp = array[first];
    array[first] = array[second];
    array[second] = tmp;
}

function bubbleSort(array){
    let firstPointer = 0;
    let secondPointer = 1;
    let swaped = true;
    let counter = 0;

    while(swaped){
        if(array[firstPointer] > array[secondPointer]){
            swap(firstPointer,secondPointer,array);
            firstPointer++;
            secondPointer++;
            swaped = true;
            counter++;
        }else{
            firstPointer++;
            secondPointer++;
        }

        if(firstPointer == array.length-1 && counter == 0){
            swaped = false;
        }
        
        if(firstPointer == array.length-1){
            firstPointer = 0;
            secondPointer = 1;
            counter = 0;
        }
    }

    return array;

}




console.log(bubbleSort([5,1,7,29,8,2,100,6,89,3]))