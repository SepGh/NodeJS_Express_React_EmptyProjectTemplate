var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var jasmine = require('gulp-jasmine');
var notify = require('gulp-notify');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

//--- Run & Watch ------------------
gulp.task('browserify', function() {
  var bundler = browserify({
    entries: ['./client/app.js'],
    
    transform: [babelify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  });
  var watcher = watchify(bundler);

  return watcher
  
  .on('update', function () {
    var updateStart = Date.now();
    console.log('Updating!');
    
    watcher.bundle()
    .on('error', notify.onError(function(error) {
      console.log(error.message);
      this.emit('end');
    }))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./client/build'));
    console.log('Updated!', (Date.now() - updateStart) + 'ms');
  })
  
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./client/build'));
});

//--- Watchless ----------------------------
gulp.task('browserifyWatchless', function(){
  browserify({
    entries: ['./client/app.js'],
    transform: [babelify]
  })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./client/build'));
});

//--- defult gulp command ----------
gulp.task('default',['browserify']);