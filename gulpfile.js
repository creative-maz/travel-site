var gulp = require('gulp'),
  watch = require('gulp-watch');

gulp.task('default', function() {
  console.log('Hooray, Created a gulp Task');
});

gulp.task('html', function() {
  console.log('Imagine so 9oaosd');
});

gulp.task('styles', function() {
  console.log('Imagine so sass post css running here');
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('.app/assets/styles/**/.css', function() {
    gulp.start('html');
  });
});
