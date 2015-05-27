/*
  bundle.js
  gulp task for bundling src into lib
*/

export default function Bundle(gulp, plugins) {
  gulp.task('bundle', () => {
    let {babel} = plugins;
    return gulp.src('src/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('lib'));
  });
}