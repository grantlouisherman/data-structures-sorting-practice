function findSmallest(arr){
    let smallest = arr[0];
    let smallest_index = 0;
    arr.forEach((el, index) => {
        if(el < smallest){
            smallest = arr[index];
            smallest_index = index;
        }
    })
    return smallest_index;
}

function selectionSort(arr){
    let output = [];
    while(arr.length){
        let smallest = findSmallest(arr);
        output.push(arr[smallest]);
        arr.splice(smallest,1);
        
    }

    return output;
}

