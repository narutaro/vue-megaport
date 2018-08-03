const axios = require('axios');

let url = 'https://api-staging.megaport.com/v2/locations'

axios.get(url)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
