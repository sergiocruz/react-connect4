'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import source from 'vinyl-source-stream';
import babelify from 'babelify';
import watchify from 'watchify';
import exorcist from 'exorcist';
import browserify from 'browserify';
import browserSync from 'browser-sync';

// Input file.
watchify.args.debug = true;
let bundler = watchify(browserify('./app/app.js', watchify.args));

// Babel transform
bundler.transform(babelify.configure({
  sourceMapRelative: 'app'
}));

// On updates recompile
bundler.on('update', bundle);

function bundle() {

  gutil.log('Compiling JS...');

  return bundler.bundle()
    .on('error', (err) => {
      gutil.log(err.message);
      browserSync.notify('Browserify Error!');
      this.emit('end');
    })
    .pipe(exorcist('public/js/bundle.js.map'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream({once: true}));
}

/**
 * Gulp task alias
 */
gulp.task('bundle', () => {
  return bundle();
});

/**
 * First bundle, then serve from the ./public directory
 */
gulp.task('default', ['bundle'], () => {
  browserSync.init({
    server: './public'
  });
});
