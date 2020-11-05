const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const marked = require ('marked');
const fs = require ('fs');

let md = function (filename, classes = '') {
	var path = __dirname +"/content/" + filename + '.md';
	var include = fs.readFileSync (path, 'utf8');
	var html = marked (include);
	var html = '<div class="markdown-body m-auto text-lg '+classes+' ">' + html + "</div>"

	return html;
 };

app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
 
app.get('/', function (req, res) {
	const content = md('readme', 'max-w-screen-md')
	res.render('pages/home', {'content': content})
  })

  app.get('/demo', function (req, res) {
	res.render('pages/examples')
  })

  app.get('/demo/:name', function (req, res) {
	  console.log(req.params)
	  const content = md('demo/'+req.params.name, 'max-w-screen-lg')
	res.render('pages/home', {'content': content})
  })

  app.get('/presentation/:name', function (req, res) {
	const slide = req.params.name;
	const content = md('slides/'+slide)
	const prev = parseInt(slide) -1;
	const next = parseInt(slide) +1;
  res.render('pages/slider', {'content': content, 'prev': prev, 'next': next})
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 