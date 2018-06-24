/*
const vm = new Vue({
  el: '#app',
  data: {
    results: [
      {title: "the very first post", abstract: "lorem ipsum some test dimpsum"},
      {title: "and then there was the second", abstract: "lorem ipsum some test dimsum"},
      {title: "third time's a charm", abstract: "lorem ipsum some test dimsum"},
      {title: "four the last time", abstract: "lorem ipsum some test dimsum"}
    ]
  }
});
*/
//var toString = Object.prototype.toString


const config = {
  baseURL: 'https://api-staging.megaport.com/v2/',
  timeout: 3000,
  headers: {'X-Auth-Token': 'foobar'}
}

const instance = axios.create(config)

/*
function aget(resource) {
	instance.get(resource)
	.then(response => {this.results = response.data})
	// console.log(this.results);
	// console.dir(this.results);
	// return this.result
	console.log('RESULTS: ' + JSON.stringify(this.results));	
}
*/

var location_filter = ["id", "name"]

/*
function response_filter(response, filter){
	let response = _.map(response, function(value, key){
 		return _.pick(value, filter);
	});
}
*/

function selected(results, filter){
  results.data = _.map(results.data, function(item, index){
    return _.pick(item, filter);
  });
  return results
}

/*
// create a new object and return it
function selected(results, filter){
	var aaa = {data: "", message: ""};
  aaa.data = _.map(results.data, function(item, index){
    return _.pick(item, filter);
  });
	aaa.message = results.message;
  return aaa
}
*/

const vm = new Vue({
  el: '#location',
  data: {
    results: [],
		count: 0,
		resource: 'null'
  },
/*
  mounted() {
    //axios.get('https://api-staging.megaport.com/v2/locations')
		instance.get('locations')
		.then(response => {this.results = response.data})
		console.log('RESULTS: ' + JSON.stringify(this.results));	
    instance.get('locations')
		.then(response => {this.results = response.data})
		console.log(this.results);
		console.dir(this.results);
		console.log(JSON.stringify(this.results));
  },
*/
	methods: {
		locations: function(){
			const resource = "locations"
			instance.get(resource).then(response => {

/*
				this.results = response.data;
				console.log("original" + toString.call(response.data));
				console.dir(this.results);	
*/
				this.results = selected(response.data, location_filter);
				//console.log("selected" + toString.call(this.results));
				console.dir(this.results);	

				//console.log(JSON.stringify(this.results));	
				//console.dir(this.results);	
				//console.dir(response.data);	
				console.dir(location_filter);	
			})
		}
	}
});
