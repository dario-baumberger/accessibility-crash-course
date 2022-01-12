import fs from "fs";
import ejs from "ejs";
import fse from "fs-extra";
import path, { dirname } from "path";
import glob from "glob-all";
import dotenv from "dotenv";
import { md } from "./utils/utils";
import presentations from "./src/configs/presentations/general.json";
import navigation from "./src/configs/pages/navigation.json";
import { fileURLToPath } from "url";

const config = {
  base: process.env.BASE,
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: `env/.env.${process.env.NODE_ENV}` });

console.log(`building ${process.env.NODE_ENV}`);

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

        console.log(slide);

        if (slide) {
          var content = contentEJS(md(__dirname, `${langKey}/slides/${slide}`));
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

  for (let i = 0; i < files.length; i++) {
    let name = files[i].split(".")[0];

    name = name
      .replace(__dirname.replace(/\\/g, "/"), "")
      .replace("/", "")
      .replace(/^(.*?)\//, "");

    const lang = name.split("/")[0];

    const header = contentEJS(md(__dirname, `${lang}/partials/header`));

    const content = contentEJS(md(__dirname, name));
    ejs2html(
      __dirname + "/views/pages/index.ejs",
      {
        content: content,
        config: config,
        header: header,
        navigation: navigation,
      },
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

  for (let i = 0; i < demos.length; i++) {
    const name = demos[i].split(".")[0];
    const content = contentEJS(md(__dirname, "demo/" + name));
    ejs2html(
      __dirname + "/views/pages/demo.ejs",
      { content: content, config: config },
      name,
      `${process.env.DIST}/demo`
    );
  }
}

function copyFiles() {
  if (!fs.existsSync("./docs/assets/images")) {
    fs.mkdirSync("./docs/assets/images", { recursive: true });
  }

  fse.copy(
    "./public/images/",
    `./${process.env.DIST}/assets/images/`,
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
