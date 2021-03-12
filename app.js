const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const marked = require("marked");
const fs = require("fs");
const he = require("he");
const ejs = require("ejs");

const paths = require("./src/configs/base.json");

const config = {
  base: "",
};

// md to html
let md = function (filename) {
  var path = __dirname + "/content/" + filename + ".md";
  var include = fs.readFileSync(path, "utf8");
  var html = marked(include);
  html = '<div class="markdown-body">' + html + "</div>";

  return html;
};

function contentEJS(content) {
  //content = he.decode(content, {'encodeEverything': true})
  content = ejs.render(content, { config: config });

  return content;
}

app.engine(".html", require("ejs").__express);
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.redirect("/de");
});

app.get("/:lang", function (req, res) {
  let lang = req.params.lang;
  const content = contentEJS(md("/" + lang + "/pages/index"));
  const header = contentEJS(md("/" + lang + "/partials/header"));
  console.log("/" + lang + "/pages/index");
  res.render("pages/index", {
    content: content,
    config: config.base,
    header: header,
  });
});

app.get("/demo/:name", function (req, res) {
  const content = contentEJS(md("demo/" + req.params.name, "max-w-screen-lg"));
  res.render("pages/demo", { content: content, config: config });
});

app.get("/:lang/challenges", function (req, res) {
  let lang = req.params.lang;
  const content = contentEJS(
    md("/" + lang + "/challenges/index", "max-w-screen-lg")
  );
  res.render("pages/challenges", { content: content, config: config });
});

app.get("/:lang/presentation/:name/:slide", function (req, res) {
  let slide = req.params.slide;
  let name = req.params.name;
  let lang = req.params.lang;
  let prev;
  let next;

  if (parseInt(slide) <= 0) {
    slide = 0;
    prev = 0;
    next = 1;
  } else {
    prev = parseInt(slide) - 1;
    next = parseInt(slide) + 1;
  }

  const content = contentEJS(
    md(lang + "/slides/" + paths.names[name].paths[slide].slide)
  );

  res.render("pages/slider", {
    content: content,
    prev: prev,
    next: next,
    config: config,
    name: name,
    lang: lang,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
