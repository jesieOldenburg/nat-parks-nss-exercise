const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    
});

function defaultTask(cb) {
    // place code for your default task here
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
    browserSync.reload();
    cb();
}

gulp.task('js', () => {})

exports.default = defaultTask