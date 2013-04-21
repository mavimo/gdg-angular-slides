'use strict';

module.exports = function (grunt) {
  // load grunt tasks
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Configure server
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'app',
          hostname: 'localhost',
          keepalive: true
        }
      }
    },
  });

  // register tasks
  grunt.registerTask('server',  ['connect']);
  grunt.registerTask('default', ['server']);
};
