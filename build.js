const fs = require("fs");
const ejs = require("ejs");
const marked = require("marked");
const he = require("he");
const fse = require("fs-extra");
const path = require("path");
const config = {
  base: "/accessibility-crash-course",
};
//const paths = require("./src/configs/base.json");
const presentations = require("./src/configs/presentations/general.json");

// md to html
let md = function (filename) {
  const path = __dirname + "/content/" + filename + ".md";
  const include = fs.readFileSync(path, "utf8");
  const html = marked(include);
  return '<div class="markdown-body">' + html + "</div>";
};

function contentEJS(content) {
  //content = he.decode(content, {'encodeEverything': true})
  content = ejs.render(content, { config: config });

  return content;
}

// ejs to html, pass ejs params and write files to destination
function ejs2html(pathString, information, name, dist = __dirname + "/docs") {
  fs.readFile(pathString, "utf8", function (err, data) {
    if (err) {
      console.log("ERROR: " + err);
      return false;
    }

    let template = ejs.compile(data, {
        filename: pathString,
      }),
      html = template(information);

    console.log(
      pathString + " (" + name + ")" + " -> " + dist + "/" + name + ".html"
    );

    console.log("name", name);

    var split = name.split("/");
    var x = split.slice(0, split.length - 1).join("/") + "/";

    console.log(`here: ${x}`);
    var folder = path.normalize(`${dist}/${x}`);

    if (!fs.existsSync(folder)) {
      console.log("doesent exist");
      fs.mkdirSync(folder);
    }

    fs.writeFile(dist + "/" + name + ".html", html, function (err) {
      if (err) {
        console.log(err);
        return false;
      }
      return true;
    });
  });
}

function buildIndex() {
  let content = contentEJS(md("pages/index"));
  const header = contentEJS(md("/partials/header"));
  ejs2html(__dirname + "/views/pages/index.ejs", {
    content: content,
    config: config,
    header: header,
  });
}

function buildSlides() {
  if (!fs.existsSync("./docs/test")) {
    fs.mkdirSync("./docs/test");
  }

  Object.keys(presentations.lang).forEach((langKey) => {
    const langs = presentations.lang[langKey];

    Object.keys(langs).forEach((presKey) => {
      const langData = langs[presKey];

      for (let langsI = 0; langsI < langData.paths.length; langsI++) {
        const path = langData.paths[langsI];

        const slide = path.file;

        let slideIndex = langsI;
        let prev;
        let next;

        if (parseInt(slideIndex) <= 0) {
          slideIndex = 0;
          prev = 0;
          next = 1;
        } else {
          prev = parseInt(slideIndex) - 1;
          next = parseInt(slideIndex) + 1;
        }

        console.log(slide);

        if (slide) {
          var content = contentEJS(md(`${langKey}/slides/${slide}`));
          ejs2html(
            __dirname + "/views/pages/slider.ejs",
            {
              content: content,
              prev: prev,
              next: next,
              config: config,
              name: slide,
              lang: langKey,
            },
            slide,
            "docs/test"
          );
        }
      }
    });
  });
}

function buildDemo() {
  const demos = fs.readdirSync(__dirname + "/content/demo");

  if (!fs.existsSync("./docs/demo")) {
    fs.mkdirSync("./docs/demo");
  }

  for (i = 0; i < demos.length; i++) {
    const name = demos[i].split(".")[0];
    const content = contentEJS(md("demo/" + name));
    ejs2html(
      __dirname + "/views/pages/demo.ejs",
      { content: content, config: config },
      name,
      "docs/demo/"
    );
  }
}

function copyImages() {
  if (!fs.existsSync("./docs/static/images")) {
    fs.mkdirSync("./docs/static/images");
  }

  fse.copy("./public/images/", "./docs/static/images/", function (err) {
    if (err) {
      console.error(err);
    }
  });
}

function init() {
  if (!fs.existsSync("./docs")) {
    fs.mkdirSync("./docs");
  }

  // buildIndex();
  buildSlides();
  //buildDemo();
  //copyImages();
}

init();
