// Question1 
// const heading = document.querySelector('.heading');
// const button = document.querySelector('.button');

// button.addEventListener('click', () => {
//     heading.textContent = 'I am new Heading';
// });

// Question 2
// const box = document.getElementById('main');
// const button = document.getElementById('button');


// button.addEventListener('click', () => {
//     box.style.backgroundColor = 'red';
// });

// Question 2 
const list = document.getElementById('myList');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');

addBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    list.appendChild(newItem);

});

removeBtn.addEventListener('click', () => {
    if (list.lastChild) {
        list.removeChild(list.lastChild);

    }
})