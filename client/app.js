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

        li.innerHTML = `
            ${student.name} - ${student.age}

            <button onclick="deleteStudent('${student._id}')">
                Delete
            </button>

            <button onclick="updateStudent('${student._id}')">
                Update
            </button>
        `;

        list.appendChild(li);
    });
}

async function deleteStudent(id) {

    await fetch(`http://localhost:5000/students/${id}`, {
        method: 'DELETE'
    });

    alert('Student Deleted');

    getStudents();
}

async function updateStudent(id) {

    const newName = prompt('Enter new name');
    const newAge = prompt('Enter new age');

    await fetch(`http://localhost:5000/students/${id}`, {

        method: 'PUT',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            name: newName,
            age: newAge
        })
    });

    alert('Student Updated');

    getStudents();
}
