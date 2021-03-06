const express = require('express')
const url = require('url')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()
const {calculateRate} = require('./utils/price_calculator')


app.use(express.static(path.join(__dirname, 'public')))
app .set('views', path.join(__dirname, 'views'))
app .set('view engine', 'ejs')
app .get('/', (req, res) => res.render('pages/index'))

app.get('/getRate', (req, res)=>{
  const queryObject = url.parse(req.url,true).query;
  console.log(queryObject.type, queryObject.weight)
  console.log(calculateRate(queryObject.type, queryObject.weight))
  res.render('pages/response', {price: calculateRate(queryObject.type, queryObject.weight)})
})

app .listen(PORT, () => console.log(`Listening on ${ PORT }`))