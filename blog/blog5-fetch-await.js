var fetch = require("node-fetch");

let url = 'https://api-staging.megaport.com/v2/locations';

(async() => {
  try {
    const response = await fetch(url);
    //console.log(response.status);
    console.log(response);
  } catch (e) {
    console.log("error!")
  }
})();
