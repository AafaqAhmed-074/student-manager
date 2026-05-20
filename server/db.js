const mongoose = require('mongoose');

mongoose.connect('Your Database Connection string obtained through MongoDB Atlas')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

