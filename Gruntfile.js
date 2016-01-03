module.exports = (grunt) => {
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015'],
      },
      dist: {
        files: {
          'dist/gmusic-mini-player.js': 'dist/gmusic-mini-player.js',
        },
      },
    },
    browserify: {
      dist: {
        files: {
          'dist/gmusic-mini-player.js': ['src/gmusic-mini-player.js'],
        },
        options: {
          transform: ['brfs'],
        },
      },
    },
    eslint: {
      options: {
        configFile: '.eslintrc',
      },
      src: ['src/*.js'],
    },
    execute: {
      genCSS: {
        src: ['lib/generate-stylesheet.js'],
      },
    },
    uglify: {
      dist: {
        files: {
          'dist/gmusic-mini-player.min.js': ['dist/gmusic-mini-player.js'],
        },
      },
    },
    watch: {
      main: {
        files: ['src/**/*.js', 'lib/**/*'],
        tasks: ['build'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('gruntify-eslint');


  grunt.registerTask('test', ['eslint']);
  grunt.registerTask('build', ['eslint', 'execute:genCSS', 'browserify', 'babel', 'uglify']);
};
