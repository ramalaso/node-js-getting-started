const express = require('express')
const path = require('path')
const app = express()
const routes = require('./routes/suppliers');

require('dotenv').config();
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))
app .set('views', path.join(__dirname, 'views'))
app .set('view engine', 'ejs')

app.use('/suppliers', routes)

app .listen(PORT, () => console.log(`Listening on ${ PORT }`))