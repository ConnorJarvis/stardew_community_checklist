const { toArray } = require('lodash');

var app = require('express')();
var http = require('http').createServer(app);
const io = require("socket.io")(http, {
    cors: {
      origin: "https://stardew.vangel.io",
      methods: ["GET", "POST"]
    }
  });
var r = require('rethinkdb');
var connection = null;
r.connect( {host: '127.0.0.1', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
}) 
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('new-save', (msg) => {
    console.log(msg.id)
    r.db('sdv').table('saves').insert({id: msg.id, data: 'e30='}).run(connection, function(err, result) {
        // if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
        socket.emit("saveregistered", "ready")
    })
   
  });
  socket.on('request-update', (msg) => {
    r.db('sdv').table('saves').get(msg.id).run(connection, function(err, result) {
        // if (err) throw err;
        // console.log(JSON.stringify(result, null, 2));
        socket.emit(result.id,result.data);
    })
  });
  socket.on('update', (msg) => {

    r.db('sdv').table('saves').get(msg.id).update({data: msg.data}).run(connection, function(err, result) {
        // if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
        console.log(msg.id)
        io.emit(msg.id,msg.data);
    })
  });

});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

