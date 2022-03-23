const gulp = require('gulp'),
  webserver = require('gulp-server-io'),
  dest = 'builds/codeclinic/';

gulp.task('html', async function() {
  gulp.src(dest + '**/*.html');
});

// Regular CSS
gulp.task('css', async function() {
  gulp.src(dest + '**/*.css');
});

// JavaScript ES6
gulp.task('js', async function() {
  gulp.src(dest + '**/*.js');
});

gulp.task('watch', function() {
  gulp.watch(dest + '**/*.js', gulp.series('js'));
  gulp.watch(dest + '**/*.css', gulp.series('css')); //CSS
  gulp.watch(dest + '**/*.html', gulp.series('html'));
});

gulp.task('webserver', async function() {
  gulp.src(dest).pipe(
    webserver({
      serverReload: {
        dir: dest,
        config: { verbose: true, debounce: 1000 }
      },
      port: 3000,
      open: true
    })
  );
});

gulp.task('default', gulp.series('html', 'css', 'js', 'webserver', 'watch'));
