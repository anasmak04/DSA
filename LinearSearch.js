const LinearSearch  = (array, target) => {
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] == target){
            return i;
        }
    }

    return -1;
}



let array = [6,5,9,8,7];

console.log(LinearSearch(array,5));