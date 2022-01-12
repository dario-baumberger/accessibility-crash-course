"use strict";

import marked from "marked";
import fs from "fs";

function md(dir, filename) {
  var path = dir + "/content/" + filename + ".md";
  var include = fs.readFileSync(path, "utf8");
  var html = marked(include);
  html = '<div class="markdown-body">' + html + "</div>";

  return html;
}

export { md };
