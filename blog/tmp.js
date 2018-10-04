const axios = require('axios');

let url = 'https://api.megaport.com/v2/products'

axios.get(url)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
