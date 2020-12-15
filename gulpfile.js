const { src, dest, watch, series, lastRun } = require("gulp");
const zip = require("gulp-zip");
const path = require("path");

const widgetLocation = `${process.env.HOME}/Library/Application Support/Übersicht/widgets`;

const buildDist = () => (
  src("./UeberPlayer.widget/**/*", { since: lastRun(buildDist) })
    .pipe(dest("./dist/UeberPlayer.widget"))
)

const makeZip = () => (
  src("./UeberPlayer.widget/**")
    .pipe(zip("UeberPlayer.widget.zip"))
    .pipe(dest("./"))
)

const apply = () => (
  buildDist()
    .pipe(dest(path.join(widgetLocation, 'UeberPlayer.widget')))
)

const dev = () => {
  watch('./UeberPlayer.widget/**/*', { ignoreInitial: false }, apply);
}

exports.default = buildDist;
exports.apply = apply;
exports.dev = dev;
exports.release = series(buildDist, makeZip);
