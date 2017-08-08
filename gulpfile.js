var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
WebpackDevServer = require('webpack-dev-server'),


gulp.task('styles', function() {
    gulp.src('./src/assets/sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/css/'));

    gulp.src('./src/assets/css/*')
        .pipe(gulp.dest('./build/css/'))
});

gulp.task('fonts', function () {
    gulp.src('./src/assets/fonts/*')
        .pipe(gulp.dest('./build/fonts/'))
});

gulp.task('img', function () {
    gulp.src('./src/assets/fonts/*')
        .pipe(gulp.dest('./build/img/'))
});

gulp.task('webpack-compile', function () {
    webpack(webpackConfig, function (err, stats) {
        if(!err){
            gulp.run('webpack-dev-server');
        }

    });
});

gulp.task('webpack-dev-server', function () {
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = 'eval';
    myConfig.debug = true;

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(webpackConfig), {
        publicPath: '/' + myConfig.output.publicPath,
        hot:true,
        stats: {
            colors: true
        },
    }).listen(8080, 'localhost', function(err) {
        if(err)
            console.log(err);
        console.log('success');
    });

});

gulp.task('default',function() {
    gulp.run('styles');
    gulp.run('fonts');
    gulp.run('webpack-compile');
    gulp.run('img');

    gulp.watch('./src/assets/sass/app.scss',['styles']);
    gulp.watch('./src/assets/css/*.css',['styles']);
    gulp.watch('./src/assets/fonts/*',['fonts']);
    gulp.watch('./src/assets/img/*',['img']);
});
