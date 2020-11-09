var fs = require('fs'),
    ejs = require("ejs");
const marked = require ('marked');

let md = function (filename) {
    var path = __dirname +"/content/" + filename + '.md';

    console.log(path)

    var include = fs.readFileSync (path, 'utf8');
    var html = marked (include);
    html = '<div class="markdown-body">' + html + "</div>"

    return html;
};

function ejs2html(path, information, name = path.split("/").pop().split('.')[0], dist = __dirname+'/dist') {


    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.log("ERROR: " + err);
            return false;
        }
        var ejs_string = data,
            template = ejs.compile(ejs_string, {
                filename: path
            }),
            html = template(information);
        fs.writeFile(dist+'/'+name + '.html', html, function (err) {
            if (err) {
                console.log(err);
                return false
            }
            return true;
        });
    });
}
// console.log("This is path --> ", __dirname + '/view/pages/bodyTemplate.ejs');

var content = md('readme')
ejs2html(__dirname + '/views/pages/index.ejs', {'content': content} );

///////////////////


files = fs.readdirSync(__dirname + '/content/slides')

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

    var content = md('slides/' + i)
   ejs2html(__dirname + '/views/pages/slider.ejs', {'content': content, 'prev': prev, 'next': next}, i, 'dist/presentation/');
}

///////////////////


let demos = fs.readdirSync(__dirname + '/content/demo')

console.log(demos)

for (i = 0; i < demos.length; i++) {

    let name = demos[i].split('.')[0]



    var content = md('demo/' +  name)

    console.log(name, content)

   ejs2html(__dirname + '/views/pages/demo.ejs', {'content': content}, name, 'dist/demo/');
}
