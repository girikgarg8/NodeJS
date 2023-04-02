const express=require('express');
const http=require('http');
const socketio=require('socket.io');

const app=express();

const server=http.createServer(app);
const io=socketio(server)

io.on('connection',(socket)=>{
    console.log('A user connected ',socket.id)

    socket.on('from_client',()=>{
        console.log("event coming from client")
    })
    setInterval(()=>{
        socket.emit('from_server',{data:'Hello from the server!'})
    },2000)
    setInterval(() => {
        socket.emit('from_server_2', { data: 'Hello from the server-2!' })
    }, 1000)
});

app.use('/',express.static(__dirname+'/public')) //this tellsthe path of all static files in the folder structure

server.listen(3000,()=>{
    console.log('Server started')
})