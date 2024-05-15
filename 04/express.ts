const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.listen(port, () => {
    console.log(`server running in port ${port}`);
})