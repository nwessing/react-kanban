var gulp = require('gulp');
var reactify = require('reactify');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

gulp.task('build', function (){
    var watcher = watchify(browserify({
        entries: ['./client/js/index.jsx'],
        debug: true,
        extensions: ['.jsx'],
        transform: [reactify],
        cache: {},
        packageCache: {},
        fullPaths: true
    }));
    watcher.on('error', function (e) {
        console.log(e);
    });
    return watcher.on('update', function () {
        watcher.bundle()
            .on('error', function(err) {
                console.err(err);
            })
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./client/bin/'));
    }).bundle()
        .on('error', function(err) {
            console.err(err);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./client/bin/'));
});

gulp.task('default', ['build']);