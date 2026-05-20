async function addStudent() {

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    const response = await fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, age })
    });

    const data = await response.json();

    alert(data.message);
}

async function getStudents() {

    const response = await fetch('http://localhost:5000/students');

    const data = await response.json();

    const list = document.getElementById('students');

    list.innerHTML = '';

    data.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.name} - ${student.age}`;
        list.appendChild(li);
    });
}