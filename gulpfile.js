"use strict";

const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");

const gulpif = require("gulp-if");

var serve = require('gulp-serve');

const isProduction = true;

gulp.task("js", () => {
    gulp.src("./src/*.js")
        .pipe(gulpif(!isProduction, sourcemaps.init()))
        .pipe(babel({
            presets: ["es2015"],
            plugins: ["transform-es2015-modules-systemjs"]
        }))
        .pipe(uglify())
        .pipe(gulpif(!isProduction, sourcemaps.write()))
        .pipe(gulp.dest("./dist"));
});

gulp.task("lib", () => {
    return gulp.src(["./node_modules/systemjs/dist/system.js", "./node_modules/systemjs/dist/system-polyfills.js"])
        .pipe(gulp.dest("./dist"));
});

gulp.task("build", ["js", "lib"]);

gulp.task("default", ["build"]);

gulp.task("serve", serve("."));
