var gulp = require("gulp");

gulp.task("move-node_modules", () => {
    console.info("Moving Node modules to build folder ...")
    return gulp.src([
        "./node_modules/**/*"
    ]).pipe(gulp.dest('./../.build/node_modules'))
})