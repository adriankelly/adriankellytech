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

    function postLoad(dataset) {
		for (var i = 0; i < dataset.length - 1; i++) { //length is - 1because  header not included in appending posts e.g. name, email, date, text
			$('.csv-target').append(
				'<div class="post">'
				+ '<h2 class="post-author">' + dataset[i].Name + '</h2>'
				+ '<span class="post-date text-right">' + dataset[i].Date + '</span>'
				+ '<address class="post-email">' + dataset[i].Email + '</address>' // add a link to email address?

				+ '<p class="post-text">' + dataset[i].Text + '</p>'
				+ '</div>')
		};
	}


$(function() {
    $("#sort").sortable({



        tolerance: 'pointer',
        scroll: true,
        scrollSensitivity: 30,

    	placeholder: 'sort-target',
    	start: function(event, ui) {
    		ui.item.addClass('current-drag');
    	},
    	stop: function(event, ui) {
    		ui.item.removeClass('current-drag');
    	}
    });
    $( "#sort" ).disableSelection();
});


});