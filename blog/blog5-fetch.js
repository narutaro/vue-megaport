var fetch = require("node-fetch");

let url = 'https://api-staging.megaport.com/v2/locations';

fetch(url).then((response) => {
  //console.log(response.status);
  console.log(response.json().data);
}).catch(() => {
  console.log("error caught!");
});
