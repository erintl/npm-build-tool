var Koa = require('koa');
var app = new Koa();
module.exports = app;

var html =
`<html>
    <head>
        <meta charset="UTF-8">
        <title>A small test page</title>
        <script src="//localhost:9091"></script>
    </head>
    <body>
        Page loaded at: <span id="demo"></span>
    </body>
    <script language="javascript">
            document.getElementById('demo').innerHTML = new Date();
    </script>
</html>`;

app.use(function(ctx) {
  if (ctx.request.path === '/client') {
    ctx.body = html;
    return;
  }
  ctx.body = 'Koa says hi!';
});

var port = process.env.PORT || (process.argv[2] || 3000);
if(!module.parent) {
  app.listen(port);
}
console.log(`Application started.  Listening on port: ${port}`);
