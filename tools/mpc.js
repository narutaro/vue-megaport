// https://github.com/megaport/megaport.js
var Megaport = require("./mp.js");
//var megaport = new Megaport('https://api-staging.megaport.al/v2/');
var megaport = new Megaport('https://api-staging.megaport.com/v2/');
//var megaport = new Megaport('https://api-staging.i.megaport.com/v2/');
//console.log(mp.toString());

//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//megaport = new mp('https://api-staging.i.megaport.com/v2/');

// for dumping a object
//var util = require('util');


megaport.auth({
  //username: 'narusan@mac.com',
  //password: 'megaport123',
	token: '17a3d75a-f620-488b-b7f4-54d172e8f981'
});

megaport.ready(
  function(credentials) {
    //console.log(credentials);

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

		megaport.profile().then(
			function (profileObj) {
				//output(profileObj);
				console.log(profileObj);
			}
		);

  }
);

//console.log(toString(conn));
//console.log(util.inspect(conn.exports.credentials));
//console.log(util.inspect(conn));

/*


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
