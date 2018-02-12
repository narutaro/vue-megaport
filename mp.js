const config = {
  baseURL: 'https://api-staging.megaport.com/v2/',
  timeout: 3000,
  headers: {'X-Auth-Token': 'foobar'}
}

const instance = axios.create(config)


function selected(results, filter){
  results.data = _.map(results.data, function(item, index){
    return _.pick(item, filter);
  });
  return results
}

const vm = new Vue({
  el: '#location',
  data: {
		filter: '',
    results: [],
		//count: 0,
		resource: ''
  },
	methods: {
		locations: function(){
			this.filter = ["id", "name", "country", "market", "status"]
			const resource = "locations"
			instance.get(resource).then(response => {

/*
				this.results = response.data;
				console.log("original" + toString.call(response.data));
				console.dir(this.results);	
*/
				this.results = selected(response.data, this.filter);
				//console.log("selected" + toString.call(this.results));
				console.dir(this.results);	

				//console.log(JSON.stringify(this.results));	
				//console.dir(this.results);	
				//console.dir(response.data);	
				//console.dir(this.location_filter);	
			})
		}
	}
});
