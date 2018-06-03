/*
function loadScript('./static/js/megaport.js/megaport.js') {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
};
*/
// https://github.com/megaport/megaport.js
//var Megaport = require("./static/js/megaport.js/megaport.js");
//var megaport = new Megaport('https://api-staging.megaport.com/v2/');
var megaport = new mp('https://api-staging.megaport.com/v2/');
//console.log(mp.toString());
console.log(megaport.toString());

//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//megaport = new mp('https://api-staging.i.megaport.com/v2/');

// for dumping a object
//var util = require('util');

/*

megaport.auth({
  //username: 'narusan@mac.com',
  //password: 'megaport123',
	token: 'c3915bff-f285-4f5b-9b92-90258a810120'
});

megaport.ready(
  function(credentials) {
    console.log('--- credentials---');
    console.log(credentials);
    console.log('--- credentials---');

		megaport.company(credentials.companyId).update({
		  tradingName: 'AAAAAAAAAAAA',
		}).then(
		  function (response) {
				console.log(response);
			}
		);

		megaport.company(credentials.companyId).then(
			function (profileObj) {
				console.log(profileObj);
			}
		);

    console.log('--- profile ---');
		//megaport.profile(credentials.personId).then(
		megaport.profile(credentials.personId).get().then(
			function (profileObj) {
				//output(profileObj);
				console.log(profileObj);
			}
		);
    console.log('--- profile ---');

		megaport.lists('locations').then(
			function(locations) {
				console.log(locations);
			}
		);

  }
);

//console.log(toString(conn));
//console.log(util.inspect(conn.exports.credentials));
//console.log(util.inspect(conn));

megaport.company(conn.companyId).then(
  function (profileObj) {
    console.log(profileObj);
  }
);


megaport.menuStats().then(
  function (menustats) {
    console.log(menustats);
  }
);

megaport.failauth(function () {
  console.log('Authentication Failed');
});

console.log('Menu stats');
megaport.dashboard().then(
  function (menustats) {
    console.log(menustats);
  }
);

*/
