// Karma configuration
// Generated on Sat Mar 12 2016 02:53:19 GMT-0800 (Pacific Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'client/src/bower_components/angular/angular.js',
      'client/src/bower_components/angular-ui-router/release/angular-ui-router.js',
      'client/src/bower_components/angular-mocks/angular-mocks.js',
      'client/src/bower_components/angular-resource/angular-resource.js',
      'client/src/app.js',
      'tests/test.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    plugins: [
      'karma-qunit',
      'karma-ejs-preprocessor',
      'karma-jasmine',
      'karma-chrome-launcher'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'server/_views/index.ejs': ['ejs']
    },

    ejsOptions: {
      parentPath: './server/_views/index.ejs'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
