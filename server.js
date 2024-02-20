const express = require('express');
const app = express();
const PORT = 8000;
const mongoose = require('mongoose');
const router = require('./routes/route');

app.use(express.json());
mongoose.connect('mongodb+srv://pg147:Pg$071103@pgcluster.warskf5.mongodb.net/STARORG-WEB-API?retryWrites=true&w=majority')
    .then(() => {
        console.log('MongoDB connected.');
        app.listen(PORT,console.log(`Server started at http://localhost:${PORT}`));
    })
    .catch((error) => console.log(error));

app.use('/',router);


