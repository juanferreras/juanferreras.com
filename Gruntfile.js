	module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	watch: {
		js: {
			files: ['src/js/*.js'],
			tasks: ['uglify:dev']
		},
		css: {
			files: ['src/scss/**/*.scss'],
			tasks: ['sass:dev','postcss'],
			options: {
				livereload: true
			}
		}
	},
	sass: {
		build: {
			options: {
				outputStyle: 'compressed'
			},
			files: {
				'public/css/style.css' : 'src/scss/style.scss'
			}
		},
		dev: {
			options: {
				outputStyle: 'expanded'
			},
			files: {
				'public/css/style.css' : 'src/scss/style.scss'
			}
		}
	},
	postcss: {
		options: {
			map: true,
			processors: [
				require('autoprefixer')({browsers: ['last 5 versions', 'ie 8', 'ie 9']}),
			]
		},
		dist: {
			src: 'public/css/style.css'
		}
	},
	uglify: {
		build: {
			src: 'src/js/*.js',
			dest: 'public/js/scripts.js'
		},
		dev: {
			options: {
				beautify: true,
				mangle: false,
				compress: false,
				preserveComments: 'all'
			},
			src: 'src/js/*.js',
			dest: 'public/js/scripts.js'
		}
	},
	browserSync: {
  	dev: {
      bsFiles: {
        src : [
            'public/css/style.css',
            'public/js/scripts.js'
        ]
      },
      options: {
        watchTask: true,
        proxy: "localhost:8080"
      }
    }
  }
	});

	// Load the plugins.
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-sass');

	// Task(s).
	grunt.registerTask('default', ['browserSync','watch']);
	grunt.registerTask('dev', ['uglify:dev','sass:dev','postcss']);
	grunt.registerTask('build', ['uglify:build','sass:build', 'postcss']);
	};