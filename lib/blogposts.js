// Gathers up blog-posts and writes them tto the blogpage.
// TODO: Refactor this at some point, looks a tad nasty.
function blogPosts() {
  return function(files, metalsmith, done) {
    setImmediate(done);
    let blogPosts = [];
    let topics = []; 
    Object.keys(files).forEach(function(file){
      const item = files[file];
      if (item.path.includes('posts')) {
        const postDate = item.dateString
          ? item.dateString
            .split('.')
            .reverse()
          : item.stats.birthtime;
        const date = new Date(postDate)
          .toLocaleDateString('fi-FI', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        let postTopics = [];
        if (item.topics) {
          postTopics = item.topics.split(' ');
        }
        
        postTopics && postTopics.map(topic => {
          if(topics.indexOf(topic) === -1) {
            topics.push(topic);
          }
        });

        const blogPost = {
          title: item.title,
          content: item.contents,
          epochTime: new Date(postDate).getTime(),
          time: date,
          topics: postTopics,
        };

        blogPost && blogPosts.push(blogPost);
      }
    });
    Object.keys(files).forEach(function(file){
      const item = files[file];
      if (files[file].blogPage) {
        files[file].blogPosts = blogPosts
          .sort((cur, prev) => prev.epochTime - cur.epochTime);
        files[file].topics = topics;
      }
    });
  }
}

module.exports = blogPosts;
