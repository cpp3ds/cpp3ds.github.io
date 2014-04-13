module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: [
          'bower_components/foundation/scss',
          'bower_components/foundation-icon-fonts'
        ]
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    compass: {
      dist: {
        options: {
          sassDir: 'scss',
          cssDir: 'css',
          environment: 'production'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
      usemin: {
        files: ['js/**/*.js', 'index_build.html'],
        tasks: ['copy','useminPrepare','concat','uglify','usemin']
      }
    },

    copy: {
      index: {
        src: 'index_build.html',
        dest: 'index.html',
      },
    },

    useminPrepare: {
      html: 'index_build.html',
      options: {
        dest: '.'
      }
    },
    usemin: {
      html: 'index.html',
      options: {
        assetsDirs: ['foo/bar', 'bar']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('build', ['sass','copy','useminPrepare','concat','uglify','usemin']);
  grunt.registerTask('default', ['build','watch']);
}