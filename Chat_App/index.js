const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const connect=require('./config/database_config.js')
const app = express();

const server = http.createServer(app);
const io = socketio(server)

io.on('connection', (socket) => {
    console.log('A user connected ', socket.id)

    // socket.on('from_client',()=>{
    //     console.log("event coming from client")
    // })
    // setInterval(()=>{
    //     socket.emit('from_server',{data:'Hello from the server!'})
    // },2000)
    // setInterval(() => {
    //     socket.emit('from_server_2', { data: 'Hello from the server-2!' })
    // }, 1000)

    socket.on('join_room',(roomid)=>{
        socket.join(roomid)
    })
    socket.on('msg_send', (data) => {
        console.log(data);
        io.emit('msg_rcvd',data);
    })


});

app.set('view engine','ejs');
app.use('/', express.static(__dirname + '/public')) //this tellsthe path of all static files in the folder structure

app.get('/chatid/:roomid',async (req,res)=>{
    res.render('index',{
        name:'Girik ',
        id:req.params.roomid
    })
})
server.listen(3000, async () => {
    console.log('Server started')
    await connect();
    console.log('MongoDB connected')
})