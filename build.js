var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var filter = require('metalsmith-filter');
var layouts = require('metalsmith-layouts');
var collections = require('metalsmith-collections');
var blogPosts = require('./lib/blogposts.js');

function drafts() {
  return function(files, metalsmith, done){
    setImmediate(done);
    Object.keys(files).forEach(function(file){
      var data = files[file];
      if (data.draft) delete files[file];
    });
  };
}

metalsmith(__dirname)
  .source('./src/pages/')
  .destination('dist')
  .use(collections({
    posts: '*.md'
  }))
  .use(markdown())
  .use(drafts())
  .use(blogPosts())
  .use(require('./lib/handlebars-helpers.js')())
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