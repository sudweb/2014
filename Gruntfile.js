'use strict';

module.exports = function (grunt) {
  require("matchdep").filterDev(["grunt-*", "!grunt-cli"]).forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    deployableFiles: [
      '*.{html,txt,pdf,png}',
      'browserconfig.xml',
      'assets/**/*',
      '.htaccess'
    ],
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
          'style-disabled': true,
          'attr-unsafe-chars': true,
          'space-tab-mixed-disabled': true
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
        src: '<%= deployableFiles %>',
        options: {
          repo: 'git@github.com:sudweb/2014.git'
        }
      },
      'dev': {
        src: '<%= deployableFiles %>'
      }
    },
    watch: {
      html: {
        files: '<%= htmlhint.build.src %>',
        tasks: ['htmlhint']
      },
      css: {
        files: ['assets/sass/**/*.scss'],
        tasks: ['compass:dist']
      }
    }
  });

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['compass']);
  grunt.registerTask('watch', ['build', 'watch']);

  grunt.registerTask('deploy', ['deploy-prod']);
  grunt.registerTask('deploy-dev', ['compass', 'gh-pages:dev']);
  grunt.registerTask('deploy-prod', ['compass', 'gh-pages:production']);
};
