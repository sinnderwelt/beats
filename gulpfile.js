const { src, dest, task, series, watch } = require("gulp");
const rm = require("gulp-rm");
const sass = require("gulp-sass")(require("sass"));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const px2rem = require('gulp-smile-px2rem');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const { stream } = require("browser-sync");

task("copy:png", () => {
    return src("assets/images/*")
            .pipe(dest("dist/assets/images"))
            .pipe(reload({ stream: true }));
});


task("clean", () => {
    return src( "dist/**/*", { read: false }).pipe(rm());
  });

task("copy:html", () => {
        return src("*.html")
                .pipe(dest("dist"))
                .pipe(reload({ stream: true }));
});

const styles = [
        "node_modules/normalize.css/normalize.css",
        "css/index.scss"
];

task("styles", () => {
        return src(styles)
        .pipe(sourcemaps.init())
        .pipe(concat("main.min.scss"))
        .pipe(sass().on("error", sass.logError))
        .pipe(px2rem())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(dest("dist"))
        .pipe(reload({stream: true}));

});

const libs = [
    "node_modules/jquery/dist/jquery.js",
    "js/burger.js",
    "js/ops.js",
    "js/team-acco.js",
    "js/color.js",
    "js/map.js",
    "js/modal.js",
    "js/player.js",
    "js/slider-clicker.js",
    "js/slider.js"
    

]

task('scripts',() => {
      return src(libs)
      .pipe(sourcemaps.init())
      .pipe(concat("main.min.js", {newLine: ";"}))
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(dest("dist"))
      .pipe(reload({stream: true}));
})

task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        // open: false // Не дает после загрузки gulp странице открываться в новом окне
    });
});

watch('./css/*.scss', series('styles'));
watch('*.html', series('copy:html'));
watch('*.js', series('scripts'));


task("default", series("clean", "copy:html", "copy:png",  "styles", "scripts", "server"));