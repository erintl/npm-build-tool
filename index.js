var Koa = require('koa');
var app = new Koa();
module.exports = app;

app.use(function(ctx) {
  ctx.body = 'Koa says hi!';
});

var port = process.env.PORT || (process.argv[2] || 3000);
if(!module.parent){
  app.listen(port);
}
console.log(`Application started.  Listening on port: ${port}`);
