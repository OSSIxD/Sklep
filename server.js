const express = require('express')
const app = express()
const path = require('path')
const routes = require('./routes')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set(express.static(path.join(__dirname, 'public')))

app.use('/', routes)
app.use('/stworz', routes)
app.use('/zaloguj', routes)

app.listen(3000, function () {
    console.log('Listening!')
})