const express = require('express')
require('dotenv').config()

const connectDB = require('./config/db')

const app = express()

//Routes
const task = require('./routes/todo')

//Connect database
connectDB()

//Initalize middleware
app.use(express.json({ extended: false }))
app.get('/', (req, res) => res.send('Server up and running'))

app.use('/api/task', task)

//Setting up port
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`)
})
