const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aafaqahmed365_db_user:<your-db-password>@cluster0.18utylz.mongodb.net/?appName=Cluster0')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

