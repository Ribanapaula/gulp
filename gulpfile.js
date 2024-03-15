const gulp = require ("gulp");
const concat = require ("gulp-concat");
const rename = require ("gulp-rename");
const jsmin = require ("gulp-jsmin");
const cssmin = require ("gulp-cssmin");
const htmlmin = require ("gulp-htmlmin");
const image = require("gulp-image");

gulp.task("js", function () {
    return gulp
    .src("./projeto/vendor/**/*.js") 
    .pipe(concat("scripts.js"))
    .pipe(rename({suffix: "min"}))
    .pipe(jsmin({ collapseWhitespace: true })) 
    .pipe(gulp.dest("./dist/js")) 
    });

gulp.task("js", function () {
    return gulp
    .src("./projeto/src/**/*.js")
    .pipe(concat("scripts.js"))
    .pipe(rename({suffix: "min"}))
    .pipe(jsmin({ collapseWhitespace: true })) 
    .pipe(gulp.dest("./dist/js")) 
    });
    
gulp.task("css", function () {
    return gulp
    .src("./projeto/vendor/**/*.css") 
    .pipe(concat("style.css"))
    .pipe(rename({suffix: "min"}))
    .pipe(cssmin()) 
    .pipe(gulp.dest("./dist/css"))
    });

gulp.task("css", function () {
    return gulp
    .src("./projeto/src/**/*.css") 
    .pipe(concat("style.css"))
    .pipe(rename({suffix: "min"}))
    .pipe(cssmin())
    .pipe(gulp.dest("./dist/css"))
    });

gulp.task("html", function () {
    return gulp
    .src("./projeto/*.html")
    .pipe(concat("index.html")) 
    .pipe(htmlmin({ collapseWhitespace: true })) 
    .pipe(gulp.dest("./dist/html")) 
});

gulp.task("images", function () {
    return gulp
    .src("./projeto/src/images/*")
    .pipe(image())
    .pipe(gulp.dest("./dist/images"))
})
    
exports.default = gulp.series("js", "css", "html", "images");


