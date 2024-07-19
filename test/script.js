document.addEventListener('DOMContentLoaded', () => {
    fetchTasks();
});

function fetchTasks() {
    fetch('http://127.0.0.1:5000/tasks')
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById('#task-list');
            taskList.innerHTML = '';
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task.task;
                taskList.appendChild(li);
            });
        });
}

function addTask() {
    const newTask = document.getElementById('#new-task').value;
    fetch('http://127.0.0.1:5000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task: newTask })
    })
    .then(response => response.json())
    .then(() => {
        fetchTasks();
        document.getElementById('#new-task').value = '';
    });
}

/*
// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetchData();
});

function fetchData() {
    // Assuming you have an API endpoint that returns JSON data
    fetch('https://example.com/api/data')
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    // Clear existing data
    dataContainer.innerHTML = '';
    // Iterate over the data and create HTML elements to display it
    data.forEach(item => {
        const dataItem = document.createElement('div');
        dataItem.classList.add('data-item');
        dataItem.textContent = `ID: ${item.id}, Name: ${item.name}, Age: ${item.age}`;
        dataContainer.appendChild(dataItem);
    });
}
*/