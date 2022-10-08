const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
var cors = require('cors')

const app = express()
connectDB()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use('/uploads', express.static('uploads'))
app.use('/api/articles', require('./routes/articleRoute'))
app.use('/api/users', require('./routes/userRoutes'))


app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));