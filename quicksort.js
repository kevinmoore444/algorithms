const array = [2,4,5,3,7,9,8]
const start = 0
const end = 6

const quickSort = (array, start, end) => {

    let pivot = array[end];
    let partitionIndex = start;
    if(start<end){
    for(let i=start; i<end; i++){
        if(array[i]<pivot){
            [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]];
            partitionIndex++;
        }
    }
    [array[partitionIndex], array[end]] = [array[end], array[partitionIndex]];
    quickSort(array, start, partitionIndex-1);
    quickSort(array, partitionIndex+1, end);
    }
    return array
}

console.log(quickSort(array, start, end))