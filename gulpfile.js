const fileinclude = require('gulp-file-include');
const clean = require('gulp-clean');
const gulp = require('gulp');

const target = './docs';
const targetStyle = target + '/style';

function cleandocs() {
    return gulp.src(target, {read: false})
      .pipe(clean());
}

function copyresources() {
   return gulp.src(['./style/**' ])
      .pipe(gulp.dest(targetStyle));
}

function copy() {
   return gulp.src(['./**/*.xhtml', '!./fragments/**', '!./node_modules/**', '!temp.xhtml', '!templet-general.xhtml' ])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest(target));
}


const build = gulp.series(cleandocs, copyresources, copy);

exports.build = build;
exports.default = build;

