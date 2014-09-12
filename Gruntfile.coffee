module.exports = (grunt) ->
  pkg = grunt.file.readJSON 'package.json'
  cookies = grunt.file.readJSON 'bower_components/Cookies/bower.json'
  pako = grunt.file.readJSON 'bower_components/pako/package.json'


  grunt.initConfig
    uglify:
      build:
        options:
          sourceMap: true
          banner: """
          /*!
           * #{pkg.name} - #{pkg.version} license: MIT #{pkg.homepage}
           *
           * - dependencies
           * #{cookies.name} - #{cookies.version} license: MIT https://github.com/ScottHamper/Cookies
           * msgpack.js - 1.05 license: MIT https://github.com/msgpack/msgpack-javascript
           * #{pako.name} - #{pako.version} license: #{pako.license.type} #{pako.homepage}
           */
          """
        files:
          'dist/zcookies.min.js': [
            'bower_components/Cookies/src/cookies.js'
            'bower_components/msgpack-javascript/msgpack.js'
            'bower_components/pako/dist/pako.js'
            'zcookies.js'
          ]





  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.registerTask 'default', ['uglify']