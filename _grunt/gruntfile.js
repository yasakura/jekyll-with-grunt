/**
 * Gruntfile.js
 */
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dev: {
        options: {
          //style: 'nested'
          //style: 'compact'
          //style: 'compressed'
          style: 'expanded',
          //debugInfo: 'true'
        },
        files: {
          // 'destination': 'source'
          '../css/style.css': '../scss/style.scss'
        }
      },// dev
      prod: {
        options: {
          style: 'compressed'
        },
        files: {
          '../css/style.min.css': '../scss/style.scss'
        }
      }// prod
    },// sass
    shell: {
      jekyllBuild: {
        command: 'jekyll build'
      }
    },// shell
     notify: {
      watch: {
        options: {
          title: 'Watch',  // optional
          message: 'SASS success !', //required
        }
      }
    },// notify
    watch: {
      options: {
        livereload: true
      },
      html: {
        files: [
          '../_includes/*.html',
          '../_layouts/*.html',
          '../*.html',
          '../css/*.css'

        ],
        tasks: ['shell', 'notify:watch']
      },
      sass: {
        files: ['../scss/*.scss'],
        //tasks: ['sass:dev', 'shell']
        tasks: [
                'sass:dev'
                ,'notify:watch'
                ,'shell'
                ]
      },
      js: {
        files: ['../js/*'],
        tasks: ['shell', 'notify:watch']
      }
    },// watch
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('prod', ['sass:prod']);
};
