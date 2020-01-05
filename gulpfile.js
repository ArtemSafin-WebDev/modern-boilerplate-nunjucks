const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const cssMinify = require('gulp-csso');
const del = require('del');
const newer = require('gulp-newer');
const svgSprite = require('gulp-svg-sprite');
const prettier = require('gulp-prettier');
const nunjucksRender = require('gulp-nunjucks-render');
const cache = require('gulp-cached');
const webpack = require('webpack');
const webpackconfig = require('./webpack.config.js');
const webpackstream = require('webpack-stream');
const filelist = require('gulp-filelist');

gulp.task('sprite', function() {
    return gulp
        .src('src/img/icons/*.svg')
        .pipe(
            svgSprite({
                mode: {
                    inline: true,
                    symbol: {
                        sprite: 'sprite.njk'
                    }
                }
            })
        )
        .pipe(gulp.dest('src/img'));
});

gulp.task('nunjucks-recompile-all', function() {
    return gulp
        .src('./src/*.+(html|nunjucks|njk)')
        .pipe(
            nunjucksRender({
                path: ['./src/templates', './src/img/symbol']
            })
        )
        .pipe(prettier())
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
});

gulp.task('nunjucks', function() {
    return gulp
        .src('./src/*.+(html|nunjucks|njk)')
        .pipe(cache('nunjucks'))
        .pipe(
            nunjucksRender({
                path: ['./src/templates', './src/img/symbol']
            })
        )
        .pipe(prettier())
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
});

gulp.task('styles', function() {
    return gulp
        .src('src/scss/styles.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('build/css'))
        .pipe(cssMinify())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp
        .src('./src/js/**/*')
        .pipe(plumber())
        .pipe(webpackstream(webpackconfig, webpack))
        .pipe(gulp.dest('./build/js/'))
        .pipe(browserSync.stream());
});

gulp.task('scripts-production', function() {
    return gulp
        .src('./src/js/**/*')
        .pipe(plumber())
        .pipe(webpackstream({ ...webpackconfig, mode: 'production', devtool: 'source-map' }, webpack))
        .pipe(gulp.dest('./build/js/'))
        .pipe(browserSync.stream());
});

gulp.task('clean', function() {
    return del('./build');
});

gulp.task('serve', function() {
    browserSync.init({
        server: 'build/',
        port: 7000,
        ghostMode: false
    });
    gulp.watch('./src/*.+(html|nunjucks|njk)', gulp.series('nunjucks', 'filelist'));
    gulp.watch('./src/img/icons/*svg', gulp.series('sprite', 'nunjucks-recompile-all'));
    gulp.watch('./src/templates/**/*.+(html|nunjucks|njk)', gulp.series('nunjucks-recompile-all'));
    gulp.watch('./src/scss/**/*.scss', gulp.series('styles'));
    gulp.watch('./src/js/**/*.js', gulp.series('scripts'));
    gulp.watch('./src/img/**/*', gulp.series('images'));
    gulp.watch('./src/assets/**/*', gulp.series('assets'));
});

gulp.task('images', function() {
    return gulp
        .src('./src/img/**/*')
        .pipe(newer('./build/img'))
        .pipe(gulp.dest('./build/img'))
        .pipe(browserSync.stream());
});

gulp.task('assets', function() {
    return gulp
        .src('./src/assets/**/*')
        .pipe(newer('./build/assets'))
        .pipe(gulp.dest('./build/assets'))
        .pipe(browserSync.stream());
});

gulp.task('filelist', function() {
    return gulp
        .src('./src/*.+(html|nunjucks|njk)')
        .pipe(
            rename({
                extname: '.html'
            })
        )
        .pipe(filelist('filelist.json', { flatten: true }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
});

gulp.task('build', gulp.series('clean', 'images', 'sprite', 'nunjucks', 'filelist', gulp.parallel('assets', 'styles', 'scripts')));

gulp.task('build-production', gulp.series('clean', 'images', 'sprite', 'nunjucks-recompile-all', 'filelist', gulp.parallel('assets', 'styles', 'scripts-production')));

gulp.task('default', gulp.series('build', 'serve'));
