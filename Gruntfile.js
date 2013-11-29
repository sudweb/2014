'use strict';

module.exports = function(grunt) {
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		htmlhint: {
			build: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'doctype-first': true,
					'spec-char-escape': true,
					'id-unique': true,
					'style-disabled': true
				},
				src: ['*.html']
			}
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
    'gh-pages': {
      'production': {
        src: [
          '*.{html,txt,pdf}',
          'css/*',
          'img/**/*',
          'js/**/*'
        ],
        options: {
          repo: 'git@github.com:sudweb/2014.git'
        }
      },
      'dev': {
        src: '<%= gh-pages.production.src %>'
      }
    },
		watch: {
			html: {
				files: '<%= htmlhint.build.src %>',
				tasks: ['htmlhint']
			},
			css: {
				files: ['sass/*.scss'],
				tasks: ['compass:dist']
			}
		}
	});

	grunt.registerTask('default', ['htmlhint', 'compass', 'watch']);

  grunt.registerTask('deploy', ['deploy-prod']);
  grunt.registerTask('deploy-dev', ['compass', 'gh-pages:dev']);
  grunt.registerTask('deploy-prod', ['compass', 'gh-pages:production']);
};