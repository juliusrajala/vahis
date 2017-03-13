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

// TODO: Refactor this. Looks disgusting.
function blogPosts() {
  return function(files, metalsmith, done) {
    setImmediate(done);
    const blogPosts = [];
    Object.keys(files).forEach(function(file){
      const item = files[file];
      if (item.path.includes('posts')) {
        const date = new Date(item.stats.atime)
          .toLocaleDateString('fi-FI', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        const blogPost = {
          title: item.title,
          draft: item.draft,
          content: item.contents,
          time: date,
        };
        blogPosts.push(blogPost);
      }
    });
    Object.keys(files).forEach(function(file){
      const item = files[file];
      if (files[file].blogPage) {
        files[file].blogPosts = blogPosts;
        console.log('item is', files[file]);
      }
    });
  }
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