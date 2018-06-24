await axios.get('https://api-staging.megaport.com/v2/locations')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
