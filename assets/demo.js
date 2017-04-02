var http = require('http');

var PORT = 8080;

function handleRequest(req, res) {
  if (req.url == '/abialbon') {
    res.end('Welcome Master');
  } else {
    res.end('It works, the path his is:' + req.url);
  }
};

var server = http.createServer(handleRequest);
server.listen(PORT, function() {
  console.log(`Listening to port ${PORT}`);
})
