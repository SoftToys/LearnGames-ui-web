var appRoot = 'src/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';

module.exports = {

    "babelOptions": {
      /*  modules: 'system',
        moduleIds: false,
        comments: false,
        compact: false,
        stage: 2,
        optional: [
            "es7.decorators",
            "es7.classProperties"
        ],*/
        //plugins: ["transform-es2015-modules-systemjs"],
        plugins: ["transform-decorators-legacy","transform-class-properties" , "transform-es2015-modules-systemjs"],
        //presets: ['es2015']
    },


    "paths": {
        root: appRoot,
        source: appRoot + '**/*.js',
        html: appRoot + '**/*.html',
        css: appRoot + '**/*.css',
        style: 'styles/**/*.css',
        output: outputRoot,
        exportSrv: exportSrvRoot,
        environments: 'environments/'
    }
}

