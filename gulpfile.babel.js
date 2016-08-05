/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';

import babel from 'gulp-babel';
import browserify from 'gulp-browserify';
import { exec } from 'child_process';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';

const files = {
  rawJS: ['./src/**/*.js'],
};

gulp.task('transpile', ['css'], () =>
  gulp.src(files.rawJS)
    .pipe(babel())
    .pipe(gulp.dest('./build'))
);

gulp.task('browserify', ['transpile'], () =>
  gulp.src('./build/main.js')
    .pipe(browserify({
      standalone: 'GMusicMiniPlayer'
    }))
    .pipe(rename('gmusic-mini-player.js'))
    .pipe(gulp.dest('./dist'))
);

gulp.task('uglify', ['browserify'], () =>
  gulp.src('./dist/gmusic-mini-player.js')
    .pipe(uglify())
    .pipe(rename('gmusic-mini-player.min.js'))
    .pipe(gulp.dest('./dist'))
);

gulp.task('css', function (cb) {
  exec('node lib/generate-stylesheet.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('build', ['uglify']);
