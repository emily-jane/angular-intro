module.exports = function(grunt){

 grunt.initConfig({
   jshint: {
     all: ['Gruntfile.js', 'js/**/*.js', 'test/**/*.js']
   },

   watch: {
     files: ['**/*'],
     tasks: ['jshint'],   
   }

 });

 grunt.loadNpmTasks('grunt-contrib-jshint');
 grunt.loadNpmTasks('grunt-contrib-watch');

 grunt.registerTask('default', ['jshint']);

};