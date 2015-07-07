var gulp = require('gulp');
var browserify = require('browserify');
var gutil = require("gulp-util");
var webpack = require("webpack");
var source = require('vinyl-source-stream2');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var concat = require('gulp-concat-sourcemap');
var concatcss = require('gulp-concat');


var babel = require('gulp-babel');


gulp.task('libs', function() {
    gulp.src(['./public/common/javascripts/jquery-1.11.1.min.js',
        './public/common/javascripts/jquery-migrate-1.2.1.min.js',
        './public/common/javascripts/bootstrap.min.js',
        './public/common/javascripts/jquery.dataTables.js',
        './public/common/javascripts/dataTables.bootstrap.js',
        './public/common/javascripts/lodash.min.js',
        './public/common/javascripts/async.js',
        './public/common/javascripts/intQ.js',
        './public/common/javascripts/intQ_conf.js',
        './public/common/javascripts/intQ_columnFunctions.js',
        './public/common/javascripts/intQ_utils.js',
        './public/common/javascripts/multiple-select/jquery.multiple.select.js',
        './public/common/javascripts/jquery-ui/jquery-ui-1.8.15.custom.min.js',
        './public/common/javascripts/jquery.json-2.5.1.js',
        './public/common/javascripts/jquery.tools.min.js',
        './public/common/javascripts/jquery.tinysort.js',
        './public/common/javascripts/tooltipster/js/jquery.tooltipster.js',
        './public/common/javascripts/intQ_filters.js'
    ])
    .pipe(concat('libs.js'))
        .pipe(gulp.dest('./public/libs/'));
});



gulp.task('libscss', function () {
    gulp.src([
        './public/common/stylesheets/Site.css',
        './public/common/stylesheets/bootstrap.min.css',
        './public/common/stylesheets/style.css',
        './public/common/stylesheets/dataTables.bootstrap.css',
        './public/common/stylesheets/table_jui.css',
        './public/common/stylesheets/font-awesome.min.css',
        './public/common/stylesheets/fonts.googleapis.com.css',
        './public/common/stylesheets/dashboard2_main.css'
    ])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./public/libs/'));
});


var config = require('./webpack.config')

gulp.task('webpack',function(){
    webpack(config).run(function(err, stats) {
        if(err) {
            console.log('Error', err);
        }
        else {
            console.log(stats.toString());
        }
    });

})


gulp.task('babel',function(){
    return gulp.src('react/**/*.*')
        .pipe(babel())
        .pipe(gulp.dest('dist'));

})

gulp.task('babel-watch',function(){
    gulp.watch('./react/**/*.*', ['babel']);
})

gulp.task('watch', function() {
    //gulp.watch('./public/common/javascripts/*.js', ['libs']);
    //gulp.watch('./public/common/stylesheets/*.css', ['libscss']);
    gulp.watch('./react/*.*', ['webpack']);
});

