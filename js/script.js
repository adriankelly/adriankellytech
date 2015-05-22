$('document').ready(function() {

    var file = "\\js\\post-data.csv";

	Papa.parse(file, {
		header: true, // first line is interpreted as a header, not data
		dynamicTyping: false, // respect types
		delimiter: "|",
		fastmode: true, //assumes no quoted fields exist
		download: true,

		complete: function(results){
			postLoad(results.data);
		}
	});

    // loop through each object (i.e. results.data[i])
    function postLoad(dataset) {
		for (var i = 0; i < dataset.length - 1; i++) { //length is - 1because  header not included in appending posts e.g. name, email, date, text
			$('.csv-target').append(
				'<div class="post">'
				+ '<span class="post-author">' + dataset[i].Name + '</span>'
				+ '<address class="post-email">' + dataset[i].Email + '</address>' // add a link to email address?
				+ '<span class="post-date">' + dataset[i].Date + '</span>'
				+ '<p class="post-text">' + dataset[i].Text + '</p>'
				+ '</div>')
		};
	}
});