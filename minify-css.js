var sass = require("node-sass");
var fs = require("fs");
var CleanCSS = require("clean-css");

var DEV_SCSS_FILE = "src/sass/style.scss";
var PROD_CSS_FILE = "dist/style.css";

sass.render(
  {
    file: DEV_SCSS_FILE,
    outFile: PROD_CSS_FILE
  },
  function(error, result) {
    if (!error) {
      var output = new CleanCSS().minify(result.css);

      fs.writeFile(PROD_CSS_FILE, output.styles, function(err) {
        if (err) {
          throw err;
        }
      });
    }
  }
);
