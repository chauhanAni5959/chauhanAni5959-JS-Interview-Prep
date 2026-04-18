// // Debouncing implementation

// function debounce(func, delay) {
//     let timeout;

//     return function (...args) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(this, args), delay);

//     };


// }


// // Example search function

// function search(query) {
//     document.getElementById("output").textContent = "Searching for: " + query;
// }

// const searchBox = document.getElementById("searchBox");
// const debouncedSearch = debounce(() => search(searchBox.value), 500);

// searchBox.addEventListener("keyup", debouncedSearch);


// Second Largest Array

// function SecondLargest(arr) {
//     const uniqueSort = Array.from(new Set(arr)); //to remove duplicate values

//     uniqueSort.sort((a, b) => (b - a));

//     if (uniqueSort.length >= 2) {
//         return uniqueSort[1];

//     }
//     else{
//         return -1;
//     }



// }

// console.log(SecondLargest([4, 3, 3, 5, 5, 9, 10]));

function OptimizeSecondLargest(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let SecondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            SecondLargest = largest;
            largest = arr[i];

        }
        else if(arr[i] != largest && arr[i] > SecondLargest){
            SecondLargest = arr[i];

        }

    }
    return SecondLargest;

}

console.log(OptimizeSecondLargest([1,2,5,4,6,6,7]));

