var express = require('express');
var router = express.Router();
<<<<<<< HEAD
const { Client } = require('pg');
var express = require('express');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const connectionString = process.env.DATABASE_URL;
const client = new Client({
=======
require('dotenv').config();
const { Pool } = require('pg');
var express = require('express');
var app = express();




const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
>>>>>>> 6be1da387d7aac040aa608f1429661e8a6f580dc
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false }
});

<<<<<<< HEAD
client.connect()

router.get('/', function (req, res) {
    client.query("SELECT * FROM suppliers", (err, response) => {
=======
const port = process.env.PORT || 5000;

router.get('/', function (req, res) {

  pool.connect((err, client, done) => {
    if (err) throw err
    client.query("SELECT * FROM suppliers", (err, response) => {
      done()
>>>>>>> 6be1da387d7aac040aa608f1429661e8a6f580dc
      if (err) {
        console.log(err.stack)
      } else {
        console.log(response.rows)
<<<<<<< HEAD
        res.send(response)
      }
    })
  })
//post supplier
router.post('/', function(req, res, next) {
  pg.connect( function(err, client) {
=======
        res.send(response.rows)
      }
    })
  })
});
//post supplier
router.post('/', function(req, res, next) {
  pg.connect( function(err, client, done) {
>>>>>>> 6be1da387d7aac040aa608f1429661e8a6f580dc
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    client.query('INSERT INTO suppliers(supplier_address ,supplier_name ,supplier_contact , supplier_details ) VALUES($1, $2, $3, $4) returning id', [req.body.address, req.body.name, req.body.contact, req.body.details ], function(err, result) {
<<<<<<< HEAD
=======
      done();
>>>>>>> 6be1da387d7aac040aa608f1429661e8a6f580dc
      if(err) {
        return console.error('error running query', err);
      }
      res.send(result);
    });
  });
});
//get one supplier
router.get('/:id', function(req, res, next) {
<<<<<<< HEAD
  pg.connect( function(err, client) {
=======
  pg.connect( function(err, client, done) {
>>>>>>> 6be1da387d7aac040aa608f1429661e8a6f580dc
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    client.query('SELECT * FROM suppliers WHERE id = $1', [req.params.id], function(err, result) {
      done();
      if (err) {
        return console.error('error running query', err);
      }
      res.send(result);
    });
  });
});
// update supplier
router.put('/:id', function(req, res, next) {
<<<<<<< HEAD
  pg.connect( function(err, client) {
=======
  pg.connect( function(err, client, done) {
>>>>>>> 6be1da387d7aac040aa608f1429661e8a6f580dc
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    //compare with .compareSync(req.body.data.attributes.password, storedPW)
    client.query('UPDATE suppliers SET supplier_address = $2, supplier_name = $3, supplier_contact = $4, supplier_details = $5   WHERE id = $1', [req.params.id, req.body.address, req.body.name, req.body.contact, req.body.details ], function(err, result) {
<<<<<<< HEAD
=======
      done();
>>>>>>> 6be1da387d7aac040aa608f1429661e8a6f580dc
      if (err) {
        return console.error('error running query', err);
      }
      res.send(result);
    });
  });
});
//delete one supplier
router.delete('/:id', function(req, res, next) {
<<<<<<< HEAD
  pg.connect(function(err, client) {
=======
  pg.connect(function(err, client, done) {
>>>>>>> 6be1da387d7aac040aa608f1429661e8a6f580dc
     console.log(conString)
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("connected to database");
    client.query('DELETE FROM suppliers WHERE id = $1',[req.params.id], function(err, result) {
<<<<<<< HEAD
=======
      done();
>>>>>>> 6be1da387d7aac040aa608f1429661e8a6f580dc
      if (err) {
        return console.error('error running query', err);
      }
      res.send(result);
    });
  });
});

module.exports = router;