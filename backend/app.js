const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// Middleware
app
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.use('/webstore/products', tasks)

const port = process.env.PORT || 4000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Listening on port ${port} ...`))
    } catch (error) {
        console.log(error)
    }
}
start()