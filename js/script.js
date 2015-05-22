var csvSource = '';

Papa.parse(csvSource, {
	header: true,
	complete: function(results) {
		console.log("Finished:", results.data);
	}
});