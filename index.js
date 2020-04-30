const express = require('express')
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/',(req,res)=>{
res.sendfile(__dirname + '/index.html')
})

io.on('connection',(socket)=>{
    console.log('User connected');
    socket.on('disconnect',()=>{
        console.log('User disconnected')
    })
})

http.listen(3003,()=>{
    console.log('Listening on port 3003')
})


