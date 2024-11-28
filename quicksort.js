function quicksort(array) {
    
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];

    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]); 
        } else {
            right.push(array[i]); 
        }
    }
    return [...quicksort(left), pivot, ...quicksort(right)];
}

const array = [10, 5, 8, 3, 2, 9, 6];
console.log("Array original:", array);
const sortedArray = quicksort(array);
console.log("Array ordenado:", sortedArray);
