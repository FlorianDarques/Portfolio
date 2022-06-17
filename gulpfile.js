const { src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
var tinypng = require('gulp-tinypng-compress');



function javascript() {
    return src('src/js/*.js')
    .pipe(babel())
    .pipe(src('vendor/*.js'))
    .pipe(dest('dist/js/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/js/'));
}

function css() {
    return src('src/sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(dest('dist/css/'))
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist/css/'));
}

function images() {
    return src('src/img/*.*')
    .pipe(tinypng({
        key: 'API_KEY',
        sigFile: 'dist/.tinypng-sigs',
        log: true
    }))
    .pipe(dest('dist/img/'));
}

exports.default = function() {
    watch('src/img/*', images);
    watch('src/sass/*.scss', css);
    watch('src/js/*.js', javascript);
};