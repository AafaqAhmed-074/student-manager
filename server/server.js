const express = require('express');
const cors = require('cors');
const path = require('path');

require('./db');

const Student = require('./models/Student');

const app = express();

app.use(cors());
app.use(express.json());


// Serve frontend files
app.use(express.static(path.join(__dirname, '../client')));


// GET students
app.get('/students', async (req, res) => {

    const students = await Student.find();

    res.json(students);
});


// ADD student
app.post('/students', async (req, res) => {

    const newStudent = new Student({
        name: req.body.name,
        age: req.body.age
    });

    await newStudent.save();

    res.json({
        message: 'Student Added'
    });
});

app.delete('/students/:id', async (req, res) => {

    await Student.findByIdAndDelete(req.params.id);

    res.json({
        message: 'Student Deleted'
    });
});

app.put('/students/:id', async (req, res) => {

    await Student.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            age: req.body.age
        }
    );

    res.json({
        message: 'Student Updated'
    });
});

// Home Route
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '../client/index.html'));
});


app.listen(5000, () => {
    console.log('Server running on port 5000');
});
