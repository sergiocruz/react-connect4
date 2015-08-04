'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import source from 'vinyl-source-stream';
import babelify from 'babelify';
import watchify from 'watchify';
import exorcist from 'exorcist';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';

// Browsersync Reload
const reload = browserSync.reload;

// Input file.
watchify.args.debug = true;
// let bundler = watchify(browserify('app/client.js', watchify.args));
let bundler = browserify('app/client.js', watchify.args);

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
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.stream({once: true}));
}

/**
 * Gulp task alias
 */
gulp.task('bundle', ['styles'], () => {
  return bundle();
});

/**
 * First bundle, then serve from the public directory
 */
gulp.task('default', ['bundle'], () => {
  browserSync.init({
    server: 'public'
  });
});

gulp.task('styles', () => {
  return gulp.src('app/stylesheets/*.scss')
    // .pipe($.plumber())
    // .pipe($.sourcemaps.init())
    .pipe(sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', sass.logError))
    // .pipe($.autoprefixer({browsers: ['last 1 version']}))
    // .pipe($.uncss({
    //   html: ['app/*.html']
    // }))
    // .pipe($.sourcemaps.write())
    .pipe(gulp.dest('public/stylesheets'))
    .pipe(bundle());
    // .pipe(reload({stream: true}));
});

gulp.task('watch', ['default'], () => {

  gulp.watch('app/stylesheets/**/*.scss', ['styles']);
  gulp.watch('app/**/*.js', ['bundle']);
  gulp.watch('public/**/*.html', ['bundle']);

});
