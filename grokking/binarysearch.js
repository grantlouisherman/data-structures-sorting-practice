function binarysearchRecursive(sortedArr, num){
    let midPoint = Math.floor(sortedArr.length /2);
    if(sortedArr[midPoint] === num){
        return true;
    }else if(sortedArr.length > 1){
        if(sortedArr[midPoint] > num){
            return binarysearch(sortedArr.slice(0,midPoint), num);
        }else{
            
            return binarysearch(sortedArr.slice(midPoint), num);
        }
    }else{
        return false;
    }
}


function binarysearchIterative(sortedArr, num){
    let end, mid, low;
    end = sortedArr.length-1;
    mid = Math.floor(Math.floor(sortedArr.length /2));
    low = 0;
    while(mid != end && mid != low){
        if(num === sortedArr[mid]){
            return true
        }else if(sortedArr[mid] > num){
            mid--;
        }else{
            mid++;
        }
    }
    return false;
}
let testArr = [];
for(let i=0;i<10000000;i++){
    testArr.push(i);
}

console.log(binarysearchIterative(testArr,10));

