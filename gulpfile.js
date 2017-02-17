var gulp = require('gulp');
var server = require('gulp-express');
var clean = require('gulp-clean');
var stylus = require('gulp-stylus');
var ts = require('gulp-typescript');
var path = require('path');
var webpack = require('webpack-stream');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', function () {
    return gulp
        .src('dist', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('copy', ['clean'], function () {
    return gulp
        .src('src/public/**/*.*', {base: 'src'})
        .pipe(gulp.dest('dist'));
});

gulp.task('stylus', ['clean', 'copy'], function () {
    return gulp.src('src/styles/index.styl')
        .pipe(stylus())
        .pipe(gulp.dest('dist/public/css'));
});

gulp.task('build-server', ['clean', 'copy', 'stylus'], function () {
    return gulp.src('src/**/*.{ts,tsx}')
        .pipe(tsProject())
        .pipe(gulp.dest('dist'))
});

gulp.task('dist', ['clean', 'copy', 'stylus', 'build-server'], function () {
    return gulp.src('src/main.tsx')
      .pipe(webpack( require('./webpack.config.js') ))
      .pipe(gulp.dest('dist/public/js'));
});

gulp.task('server-dev', ['dist'], function () {
    // Start the server at the beginning of the task
    server.run(['dist/server-dev.js']);

    // Restart the server when file changes
    gulp.watch('src/views/**/*.*', ['copy', 'stylus']);
    gulp.watch(['src/styles/**/*.styl'], ['stylus']);
    gulp.watch(['src/public/scripts/**/*.js'], ['jshint']);
    gulp.watch(['src/public/img/**/*'], server.notify);
    gulp.watch(['src/main.tsx', 'routes/**/*.js'], [server.run]);
});