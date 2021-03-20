const axios = require('axios');

function getSuppliers() {
    axios.get('/api/v1/suppliers')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

module.exports = {
    getSuppliers,
}