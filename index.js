var express = require('express');
var socket=require('socket.io');
var app=express();
//listening means setting up the server
var server=app.listen(4000,function(){
  console.log('listening to 4000');
});
// static files
app.use(express.static('public'));
//by default it will give the index.html page to the browser.

//socket setup
//it takes the server it needs to connect the client with as input
var io= socket(server);
//now the socket we created listens for an event called connection to happen
//io is probably the welcoming socket
//the parameter passed refers to the instance of the socket created
io.on('connection',function(socket){
  console.log("made socket connection");
  //this is the specific socket that has been passed in the function
  //basically when the socket sends a 'chat' route
  socket.on('chat',function(data){
//io.sockets means all the sockets that were made by the welcoming socket
//emit means contacting the other end i.e clients
  console.log(data);
    io.sockets.emit('chat',data);

  });
});
