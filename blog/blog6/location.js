Vue.component('location-table', {
	data: function() {
		return {
			location: [] // 10-1. location is now initialized as empty - get data from a server!
		}
	},
	created: function() {
		this.getLocation();
	},
	methods: { 
		getLocation: function(){	// 10-2. function for server API call
			let url = 'https://api-staging.megaport.com/v2/locations';
			fetch(url)
      	.then(response => response.json())
      	.then(json => {			
						this.location = json.data; 	// 10-3. Accessing data in [[PromiseValue]]
						console.log(Array.isArray(json.data));
      			console.log(json.data);
					}) 
      	.catch(error => console.error(error))
		}
	},
	template: `
      <el-table :data="location" style="width: 100%">
        <el-table-column prop="id" label="id" width="100"></el-table-column>
        <el-table-column prop="name" label="name"></el-table-column>
        <el-table-column prop="country" label="country" width="180"></el-table-column>
        <el-table-column prop="metro" label="metro" width="180"></el-table-column>
        <el-table-column prop="market" label="market" width="180"></el-table-column>
        <el-table-column prop="status" label="status" width="180"></el-table-column>
      </el-table>
	`
})
