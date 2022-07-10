const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')

const app = express()
connectDB()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/articles', require('./routes/articleRoute'))
app.use('/api/users', require('./routes/userRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`));