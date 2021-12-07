const fs = require("fs");
const ejs = require("ejs");
const marked = require("marked");
const fse = require("fs-extra");
const path = require("path");
const glob = require("glob-all");
require("dotenv").config({ path: `env/.env.${process.env.NODE_ENV}` });

const presentations = require("./src/configs/presentations/general.json");

const config = {
  base: process.env.BASE,
};

console.log(`building ${process.env.NODE_ENV}`);

// md to html
let md = function (filename) {
  const path = __dirname + "/content/" + filename + ".md";
  const include = fs.readFileSync(path, "utf8");
  const html = marked(include);
  return '<div class="markdown-body">' + html + "</div>";
};

function contentEJS(content) {
  return ejs.render(content, { config: config });
}

// ejs to html, pass ejs params and write files to destination
function ejs2html(
  pathString,
  information,
  name,
  dist = __dirname + process.env.DIST
) {
  fs.readFile(pathString, "utf8", function (err, data) {
    if (err) {
      console.error("ERROR: " + err);
      return false;
    }

    console.log(
      pathString + " (" + name + ")" + " -> " + dist + "/" + name + ".html"
    );

    const template = ejs.compile(data, {
        filename: pathString,
      }),
      html = template(information);

    var split = name.split("/");
    var x = split.slice(0, split.length - 1).join("/") + "/";

    var allDist = `${dist}/${x}`;
    var folder = path.normalize(allDist);

    fs.mkdirSync(folder, { recursive: true });

    fs.writeFile(dist + "/" + name + ".html", html, function (err) {
      if (err) {
        console.log(err);
        return false;
      }
      return true;
    });
  });
}

function buildSlides() {
  Object.keys(presentations.lang).forEach((langKey) => {
    Object.keys(presentations.lang[langKey]).forEach((presKey) => {
      const langData = presentations.lang[langKey][presKey];

      for (let langsI = 0; langsI < langData.paths.length; langsI++) {
        const path = langData.paths[langsI];

        const slide = path.file;

        let slideIndex = langsI;
        let prev;
        let next;

        if (parseInt(slideIndex) <= 0) {
          slideIndex = 0;
          prev = langData.paths[0].file;
          next = langData.paths[1].file;
        } else {
          prev = langData.paths[langsI - 1].file;
          if (langData.paths[langsI + 1]) {
            next = langData.paths[langsI + 1].file;
          }
        }

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
              presentation: presKey,
            },
            slide,
            `${process.env.DIST}/${langKey}/presentation/${presKey}`
          );
        } else {
          console.error("nothing");
        }
      }
    });
  });
}

function buildPages() {
  const files = glob.sync([__dirname + "/content/**/pages/**.md"]);

  for (i = 0; i < files.length; i++) {
    let name = files[i].split(".")[0];

    name = name
      .replace(__dirname.replace(/\\/g, "/"), "")
      .replace("/", "")
      .replace(/^(.*?)\//, "");

    const lang = name.split("/")[0];

    const header = contentEJS(md(`${lang}/partials/header`));

    const content = contentEJS(md(name));
    ejs2html(
      __dirname + "/views/pages/index.ejs",
      { content: content, config: config, header: header },
      name,
      `${process.env.DIST}`
    );
  }
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
      `${process.env.DIST}/demo`
    );
  }
}

function copyFiles() {
  if (!fs.existsSync("./docs/static/images")) {
    fs.mkdirSync("./docs/static/images", { recursive: true });
  }

  fse.copy(
    "./public/images/",
    `./${process.env.DIST}/static/images/`,
    function (err) {
      if (err) {
        console.error(err);
      }
    }
  );

  fse.copy(
    `./${process.env.DIST}/de/pages/`,
    `./${process.env.DIST}/`,
    function (err) {
      if (err) {
        console.error(err);
      }
    }
  );
}

function init() {
  if (!fs.existsSync("./docs")) {
    fs.mkdirSync("./docs", { recursive: true });
  }

  buildSlides();
  buildPages();
  buildDemo();
  copyFiles();
}

init();
