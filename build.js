var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var filter = require('metalsmith-filter');
var layouts = require('metalsmith-layouts');
var collections = require('metalsmith-collections');

function drafts() {
  return function(files, metalsmith, done){
    setImmediate(done);
    Object.keys(files).forEach(function(file){
      var data = files[file];
      if (data.draft) delete files[file];
    });
  };
}

function log() {
  return function(files, metalsmith, done){
    setImmediate(done)
    Object.keys(files).forEach(function(file){
      console.log(files[file])
    });
  };
}

metalsmith(__dirname)
  .source('./src/pages/')
  .destination('dist')
  .use(collections({
    posts: './posts/*.md'
  }))
  .use(markdown())
  .use(drafts())
  .use(log())
  .use(layouts({
    'engine':'handlebars', 
    'directory':'src/layouts',
    'partials': 'src/partials'
  }))
  .use(filter(['!*.scss', '!dist/*', '*.md', '*.html']))
  .build(function(err){
    if(err) { console.log(err); }
    else console.log('Success!');
  });