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
			megaport.lists('locations').then(
				// As this is promise object, 'then chain' to access to the data may solve?
			  function(res) {
			    console.log(res);
			    console.log(Array.isArray(res));
					//return res;
			    //this.location = res;
			  }
			);
			//this.location = locations;
			//console.log(locations);
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
