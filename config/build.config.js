var fs = require('fs');
var pkg = require('../package.json');

module.exports = {
    filename: 'my.app.js',
    banner: '/*!\n' +
    ' * This is example of my License\n' +
    ' */\n',

    closureStart: '(function(){\n ',
    closureEnd: '\n})();',

    dev: 'www',
    release: 'dist',

    others: ['www/images/*.*'],
    resetDir: ['www/js', 'www/css', 'dist', 'www/lib', 'node_modules'],
    cleanJS: ['js/*.js'],
    cleanCSS: ['css/*.css'],
    srcJS: ['src/app/**/*.js'],
    srcCSS: ['src/my.app.scss'],
    srcHTML: ['src/**/*.html'],
    combineFiles: ['www/index.html'],

    testFiles: ['test/**/*.js'],

    versionData: {
        version: pkg.version
    }
};

