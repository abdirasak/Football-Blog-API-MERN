const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/articles', require('./routes/articleRoute'))

app.listen(port, () => console.log(`Server started on port ${port}`));