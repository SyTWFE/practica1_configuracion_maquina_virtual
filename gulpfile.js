var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifycss =require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    browsersync = require('browser-sync').create();

gulp.task('minify-js',  () =>
  gulp.src('src/scripts/*.js')
  .pipe(concat('application.js'))
  .pipe(uglify())
  .pipe(gulp.dest('src/build/js/'))
);

gulp.task('minify-css', () =>
  gulp.src('src/styles/*.css')
  .pipe(concat('application.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('src/build/styles'))
);

gulp.task('sourcemaps', () =>
  gulp.src('src/styles/*.css')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/build/sourcemaps'))
);

gulp.task('serve', () =>
  browsersync.init({
      server: "./",
      port: 8090,
      baseDir: "./"
  }),
  gulp.watch("*.html").on('change', browsersync.reload)
);
