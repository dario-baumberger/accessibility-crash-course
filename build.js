const fs = require('fs');
const ejs = require("ejs");
const marked = require ('marked');
const he = require ('he');
const fse = require('fs-extra');
const config = {
    base: '/accessibility-crash-course'
}

// md to html
let md = function (filename) {
    const path = __dirname +"/content/" + filename + '.md';
    const include = fs.readFileSync (path, 'utf8');
    const html = marked (include);
    return '<div class="markdown-body">' + html + "</div>"
};

function contentEJS (content){
    //content = he.decode(content, {'encodeEverything': true})
    content = ejs.render(content, {'config': config});

    return content;
}

// ejs to html, pass ejs params and write files to destination
function ejs2html(path, information, name = path.split("/").pop().split('.')[0], dist = __dirname+'/docs') {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.log("ERROR: " + err);
            return false;
        }

            let template = ejs.compile(data, {
                filename: path
            }),
            html = template(information);

        console.log(path + ' ('+name+')' + ' -> ' + dist+name + '.html')

        fs.writeFile(dist+'/'+name + '.html', html, function (err) {
            if (err) {
                console.log(err);
                return false
            }
            return true;
        });
    });
}

function buildIndex(){
    let content = contentEJS(md('readme'));
    ejs2html(__dirname + '/views/pages/index.ejs', {'content': content, 'config': config} );
}

function buildSlides(){
    let files = fs.readdirSync(__dirname + '/content/slides');

    if (!fs.existsSync('./docs/presentation')){
        fs.mkdirSync('./docs/presentation');
    }

    for (i = 0; i < files.length; i++) {

        let slide = i;

        let prev;
        let next;

        if(parseInt(slide) <= 0){
            slide = 0;
            prev = 0;
            next = 1;
        }else{
            prev = parseInt(slide) -1;
            next = parseInt(slide) +1;
        }

        var content = contentEJS(md('slides/' + i));
        ejs2html(__dirname + '/views/pages/slider.ejs', {'content': content, 'prev': prev, 'next': next, 'config': config}, i, 'docs/presentation/');
    }
}

function buildDemo(){
    const demos = fs.readdirSync(__dirname + '/content/demo');

    if (!fs.existsSync('./docs/demo')){
        fs.mkdirSync('./docs/demo');
    }

    for (i = 0; i < demos.length; i++) {
        const name = demos[i].split('.')[0]
        const content = contentEJS(md('demo/' +  name));
        ejs2html(__dirname + '/views/pages/demo.ejs', {'content': content, 'config': config}, name, 'docs/demo/');
    }
}

function copyImages() {

    if (!fs.existsSync('./docs/static/images')){
        fs.mkdirSync('./docs/static/images');
    }

    fse.copy('./public/images/', './docs/static/images/', function (err) {
        if (err) {
            console.error(err);
        }
    });
}

function init() {
    if (!fs.existsSync('./docs')){
        fs.mkdirSync('./docs');
    }



    buildIndex();
    buildSlides();
    buildDemo();
    copyImages();
}

init();





