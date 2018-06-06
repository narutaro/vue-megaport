var megaport = new mp('https://api-staging.megaport.com/v2/');
//console.log(megaport.toString());

megaport.auth({
  //username: 'narusan@mac.com',
  //password: 'megaport123',
	token: '9074ed24-0cfd-46c8-83c3-06a054792835'
});

megaport.ready(
  function(credentials) {

    console.log('--- credentials---');
    console.log(credentials);
    console.log('--- credentials---');

		let loc = megaport.lists('locations').then(
      function(locations) {
        //console.log(locations);
				return locations;
      }
    );

	}
);

const vm = new Vue({
  el: '#location',
  data: {
		loc: void(0),
  },
  methods: {
   	ll: function(){
			console.log("ll called!");
			megaport.lists('locations').then(
				function(locations){
					console.log(locations);
					vm.loc = locations;
				} 
			);
		},
  }
});


/*

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
