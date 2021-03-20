const express = require('express')
const path = require('path')
const app = express()
const suppliers = require('./routes/suppliers');
<<<<<<< HEAD
const actions = require('./helpers/actions')


=======

require('dotenv').config();
>>>>>>> 6be1da387d7aac040aa608f1429661e8a6f580dc
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))
app .set('views', path.join(__dirname, 'views'))
app .set('view engine', 'ejs')

app.get('/', (req, res)=>{
<<<<<<< HEAD
  // res.render('pages/index', {suppliers: actions.getSuppliers()});
  res.render('pages/index');
})

app.use('/api/v1/suppliers', suppliers)
=======
  res.send('Hello')
})

app.use('/suppliers', suppliers)
>>>>>>> 6be1da387d7aac040aa608f1429661e8a6f580dc

app .listen(PORT, () => console.log(`Listening on ${ PORT }`))