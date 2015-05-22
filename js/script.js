$('document').ready(function() {

	if (Modernizr.mq('only all and (max-width: 992px)')) {

		// var file = "http://adriankelly.net/adriankellytech/js/post-data.csv";
		var file = "js//post-data.csv";

		/**
		 * Parse csv into JS readable array of objects
		 */

		Papa.parse(file, {
			header: true, // first line of csv is a header
			delimiter: "|",
			fastmode: true, // no quoted fields exist in csv
			download: true,
			complete: function(results){
				postLoad(results.data);
			}
		});

		/**
		 * Iterate over dataset and append object properties
		 */

		function postLoad(dataset) {
			for (var i = 0; i < dataset.length - 1; i++) {
				$('.csv-target').append('<div class="post">' + '<h3 class="post-author">' + dataset[i].Name + '</h3>' + '<span class="post-date text-right">' + dataset[i].Date + '</span>'	+ '<address class="post-email"><a href="mailto:#">' +dataset[i].Email + '</a></address>' + '<p>' + dataset[i].Text + '</p>'	+ '</div>'
				);
			}
			// if class selected doesn't exist listen for click,
			// if click add class and remove sibilings

			// Enable individual post to be higlighted on click
			$('.post').click(function(){
				// if ($(this).hasClass('selected')) {
				// 	$(this).removeClass('selected');
				// } else {
				// 	$(this).addClass('selected').disableSelection().siblings().removeClass('selected');
				$(this).toggleClass('selected').siblings().removeClass('selected');
		        $(this).css('-moz-user-select', 'none');
        		$(this).css('-webkit-user-select', 'none');
				}
			);
		}


//    // $('.notSelectable').disableSelection();

// function disableSelection() {
// 	if($(this).hasClass('notSelectable')) {
//         this.each(function() {
//             this.onselectstart = function() {
//                 return false;
//             };
//             this.unselectable = "on";

//         });
//         return this;
//     }
// }


		/**
		 * jQuery UI sortable used to enable drag and drop of div elements
		 */

		$("#sort").sortable({
			tolerance: 'pointer',
			scroll: true,
			delay: 350,
			scrollSensitivity: 30,
			opacity: 0.5,
			placeholder: 'sort-target',
			start: function(event, ui) {
				ui.item.addClass('current-drag');
			},
			stop: function(event, ui) {
				ui.item.removeClass('current-drag selected');
			}
		});

		$( "#sort" ).disableSelection();

	} else {
		window.location = "http://www.candyspace.com"; //redirect for desktop users
	}
});