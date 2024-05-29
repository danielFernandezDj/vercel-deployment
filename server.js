// DEPENDENCIES
require('dotenv').config()
const express = require('express')
const app = express()

// PORT CONFIGURATION
const PORT = process.env.PORT || 3000

// ROUTS
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})


module.exports = app