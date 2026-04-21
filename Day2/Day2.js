// const prices = [100, 200, 300, 400];
// const pricewithtax = prices.map(number => number * 1.1);
// console.log(pricewithtax);

// filter

// const arr = [1,2,3,3,4,4,7,8];
// const even = arr.filter(num => num.length <2);

// console.log(even);

// Reduce 

// const arr = [10, 20, 30, 40, 50];

// const sum = arr.reduce((first , next) =>{
//     return first + next;
// }, 0);

// console.log(sum);

// const users = [
//     { name: "Rahul", age: 17 },
//     { name: "Priya", age: 22 },
//     { name: "Amit", age: 15 },
//     { name: "Sneha", age: 25 }
// ];

// const adultNames = users
//     .filter(user => user.age > 18)    // Step 1: Keep only adults
//     .map(user => user.name);         // Step 2: Extract only the name string

// console.log(adultNames);
// // Output: ["Priya", "Sneha"]

// const arr = [1, 2, 3, 4, 5];
// const even_square = arr
//     .filter(num => num % 2 == 0)
//     .map(num => num*num);

// console.log(even_square);

// const arr = [1, 2, 3, 4, 5];

// const morethanTwosqrt = arr.filter((num) => {
//     return num > 2;
// }).map(num => Math.sqrt(num));

// console.log(morethanTwosqrt);


// Reduce method

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const sum = arr.reduce((acc, curr, i, arr) => {
//     return acc + curr;
// }, 0);
// console.log(sum);


// map vs foreach

// const arr = [5, 3, 2, 6, 7, 8];

// // Map doesn't modify the original array
// const arr = [5, 3, 2, 6, 7, 8];

// // Map creates a brand new array
// const mapResult = arr.map((num) => {
//     return num + 2;
// });

// // forEach modifies the existing array in place
// const forEachResult = arr.forEach((num, i) => {
//     arr[i] = num + 2;
// });

// console.log("Map result:", mapResult);     // [7, 5, 4, 8, 9, 10]
// console.log("ForEach result:", forEachResult); // undefined (This is normal!)
// console.log("Original arr (modified):", arr);  // [7, 5, 4, 8, 9, 10]

// const students = [
//   { name: "Rahul", marks: { Math: 85, Science: 90, English: 78 } },
//   { name: "Priya", marks: { Math: 92, Science: 88, English: 95 } },
//   { name: "Amit", marks: { Math: 70, Science: 75, English: 80 } }
// ];


// const morethansixty = students.filter((num) => num.marks.English > 60).map((num)=> num.name);
// console.log(morethansixty);



// JS PROMISES


// const myPromise = new Promise((res, rej) => {
//     const success = 1;

//     setTimeout(() => {
//         if (success) {
//             console.log("This operation is completed");

//         }
//         else {
//             console.log("Error happended");
//         }
//     })
// }, 2000);

// myPromise
//     .then((data) => {
//         console.log(data); // This runs if resolve() was called
//     })
//     .catch((error) => {
//         console.error(error); // This runs if reject() was called
//     })
//     .finally(() => {
//         console.log("Process finished."); // This runs no matter what
//     });


//callback


// The function that takes a callback
// function createUser(name, callback) {
//     console.log(`Saving the ${name} to the db...`);

//     setTimeout(() => {
//         console.log("User Created!")
//         callback();
//     }, 2000);


// }

// function showSuccessMessage(){
//     console.log("Account created successfully! Welcome email sent. 📧")

// }

// createUser("Ankit", showSuccessMessage);


// console.log("Start");
// const sub = new Promise((res, rej) => {
//     setTimeout(() => {
//         const result = true;
//         if (result) {
//             res("Resolved !")

//         }
//         else {
//             rej("Rejected!");
//         }
//     }, 2000);
// });

// console.log("Stop");
// sub.then((res) => {
//     console.log(res);

// }).catch((error) => {
//     console.log("Error: ", error);
// })


function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Learn the HTML CSS and JS');
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Learn the Advance JS');
        }, 1000);
    });
}

function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Learn the React JS');
        }, 1000);
    });
}

function step4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Learn the Backend!');
        }, 1000);
    });
}

// PROMISE CHAINING

// step1()
//   .then(result => {
//     console.log(result);
//     return step2();
//   })
//   .then(result => {
//     console.log(result);
//     return step3();
//   })
//   .then(result => {
//     console.log(result);
//     return step4();
//   })
//   .then(result => {
//     console.log(result);
//     console.log("All steps completed!");
//   })
//   .catch(err => console.error("Error:", err));

// Promise combinator

Promise.allSettled([step1(), step2(), step3(), step4()])
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    });
