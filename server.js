const express = require('express')
const app = express()
const path = require('path')


app.get('/css/styles.css', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'css', 'styles.css'))
  })

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/index.html`)
})
const server = app.listen(3000, () => {
console.log(`The application started on port ${server.address().port}`)
})