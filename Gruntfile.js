module.exports = function(grunt) {

grunt.initConfig({

	// Server
	connect: {
    	server: {
      		options: {}
        }
    },

	// sass
	sass: {
	    dev: {
	    	src: ['css/*.scss'],
	    	dest: 'css/style.css',
	    },
	},


    // Watch for changes in html & css
	watch: {
		html: {
			options: { livereload: true },
	  		files: ['index.html'],
		},
		sass: {
			options: { livereload: false },
	  		files: ['css/style.scss'],
	  		tasks: ['sass'],
		},
		css: {
			options: { livereload: true },
	  		files: ['css/style.css'],
		},
	},

});


// Load tasks
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task
  grunt.registerTask('default', ['connect', 'watch']);




};
