
const app = require('express')();
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});
require('./socket/socket')
const cors = require('cors');
const port = process.env.PORT || 8080;

app.use(cors())
app.get('/', function(req, res) {
   res.sendfile('index.html');
});

server.listen(port, function() {
  console.log(`Listening on port ${port}`);
});