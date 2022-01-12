import express from "express";
import path, { dirname } from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";
import presentations from "./src/configs/presentations/general.json";
import navigation from "./src/configs/pages/navigation.json";
import challenges from "./src/configs/challenges/general.json";
import { md } from "./utils/utils";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

const config = {
  base: "",
};

function contentEJS(content) {
  //content = he.decode(content, {'encodeEverything': true})
  content = ejs.render(content, { config: config });

  return content;
}

app.engine(".html", ejs.__express);
app.set("views", path.join(__dirname, "views"));
app.use("/assets", express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.redirect("/de");
});

app.get("/:lang", function (req, res) {
  let lang = req.params.lang;
  const content = contentEJS(md(__dirname, "/" + lang + "/pages/index"));
  const header = contentEJS(md(__dirname, "/" + lang + "/partials/header"));
  console.log("/" + lang + "/pages/index");
  res.render("pages/index", {
    content: content,
    config: config.base,
    header: header,
    navigation: navigation,
  });
});

app.get("/demo/:name", function (req, res) {
  const content = contentEJS(md("demo/" + req.params.name, "max-w-screen-lg"));
  res.render("pages/demo", { content: content, config: config });
});

app.get("/:lang/challenges", function (req, res) {
  let lang = req.params.lang;

  let slide = req.params.slide;
  let name = req.params.name;
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
    md("/" + lang + "/challenges/index", "max-w-screen-lg")
  );
  res.render("pages/challenges", {
    content: content,
    prev: prev,
    next: next,
    config: config,
    name: name,
    lang: lang,
  });
});

app.get("/:lang/challenges/:name/:slide", function (req, res) {
  let lang = req.params.lang;

  let slide = req.params.slide;
  let name = req.params.name;

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
    md(lang + "/challenges/" + challenges.names[name].paths[slide].file)
  );

  res.render("pages/challenges", {
    content: content,
    prev: prev,
    next: next,
    config: config,
    name: name,
    lang: lang,
  });
});

app.get("/:lang/presentation", function (req, res) {
  let lang = req.params.lang;

  res.redirect(
    `/${lang}/presentation/base/${presentations.lang[lang]["base"].paths[0].file}`
  );
});

app.get("/:lang/presentation/:name/:slideCat/:slideName", function (req, res) {
  let slideCat = req.params.slideCat;
  let slideName = req.params.slideName;
  let name = req.params.name;
  let lang = req.params.lang;
  let prev;
  let next;
  let matchIndex;

  presentations.lang[lang][name].paths.find((slide, index) => {
    if (slide.file === `${slideCat}/${slideName}`) {
      matchIndex = index;
    }
  });

  if (matchIndex < presentations.lang[lang][name].paths.length) {
    next = presentations.lang[lang][name].paths[matchIndex + 1].file;
  }

  if (matchIndex !== 0) {
    prev = presentations.lang[lang][name].paths[matchIndex - 1].file;
  }

  const content = contentEJS(
    md(__dirname, `${lang}/slides/${slideCat}/${slideName}`)
  );

  res.render("pages/slider", {
    content: content,
    prev: prev,
    next: next,
    config: config,
    presentation: name,
    lang: lang,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
