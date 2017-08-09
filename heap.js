function minHeap(array){
    let smallest = 0;
    for(let i = 1;i<array.length;i++){
        if(array[smallest] > array[i]){  
            smallest = i;
        }
    }
    let smallesValue = array[smallest];
    array.splice(smallest,1)

    return [smallesValue].concat(array);
}

console.log(minHeap([100,12,1,3,6]));
