module.exports.register = function (Handlebars, options)  {
  Handlebars.registerHelper('plusify', function (str)  {
    return  str.split(' ').join('+');
  });
};