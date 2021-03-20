const axios = require('axios');

function getSuppliers() {
    axios.get('https://gentle-anchorage-20332.herokuapp.com//api/v1/suppliers')
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