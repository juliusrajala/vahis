const handlebars = require('handlebars');

function logString(str){
  console.log(str);
}

function slugify(str) {
  const withoutCapitals = str.toLowerCase();
  const slug = withoutCapitals
    .replace(/ä/g, 'a')
    .replace(/ö/g, '-')
    .replace(/\s/g, '-');
  console.log('Slugify gets called', slug);
  return slug;
}

module.exports = function(options){
  return function helpers(file){
    handlebars.registerHelper('log', logString);
    handlebars.registerHelper('slugify', slugify);
  }
};
