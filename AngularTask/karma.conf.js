var webpackConfig = require('./config/webpack.config.dev.js');
module.exports=function(config) {
config.set({
    coverageReporter: {
      dir:'tmp/coverage/',
      reporters: [
        { type:'html', subdir: 'report-html' },
        { type:'lcov', subdir: 'report-lcov' }
      ],
      instrumenterOptions: {
        istanbul: { noCompact:true }
      }
    },
    files: [
        'src/**/*.spec.js'
    ],
    frameworks: [ 'chai', 'jasmine' ],
    reporters: ['mocha', 'coverage'],
    preprocessors: {
        'src/**/*.spec.js': ['webpack', 'sourcemap', 'coverage']
    },
    plugins: [
        'karma-jasmine', 'karma-mocha',
        'karma-chai', 'karma-coverage',
        'karma-webpack', 'karma-phantomjs-launcher',
        'karma-mocha-reporter', 'karma-sourcemap-loader'
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo:true
    }
  });
};