const taskList = document.getElementById('task-list');
const fetchBtn = document.getElementById('fetch-tasks');

const getTasks = async () => {
    taskList.innerHTML = "<li>Syncing...</li>";

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        
        if (!response.ok) throw new Error("Could not fetch tasks");

        const tasks = await response.json();

        // Using .map() to transform data into HTML strings
        // Using .join('') to turn the array into one long string
        const html = tasks.map(task => `
            <li class="${task.completed ? 'done' : ''}">
                ${task.title} 
                <strong>${task.completed ? '✅' : '⏳'}</strong>
            </li>
        `).join('');

        taskList.innerHTML = html;

    } catch (err) {
        taskList.innerHTML = `<li style="color:red;">Error: ${err.message}</li>`;
    }
};

fetchBtn.addEventListener('click', getTasks);