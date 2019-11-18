const gulp = require('gulp');

gulp.task('sass', function() {
    console.log(sass)
});

function defaultTask(cb) {
    sass();
    cb();
  }
  
  exports.default = defaultTask