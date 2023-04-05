const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const connect=require('./config/database_config.js')
const app = express();
const Chat=require('./models/chat.js');
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

    socket.on('join_room',(data)=>{
        console.log("joining a room",data.roomid);
        socket.join(data.roomid);
    })
    socket.on('msg_send', async (data) => {
        console.log(data);
        //write logic to save the database
        const chat=await Chat.create({
            roomId:data.roomid,
            user: data.username,
            content:data.msg
        })
        io.to(data.roomid).emit('msg_rcvd',data);
    })

    socket.on('typing',(data)=>{
        io.to(data.roomid).emit('someone_typing');
    })
});

app.set('view engine','ejs');
app.use('/', express.static(__dirname + '/public')) //this tellsthe path of all static files in the folder structure

app.get('/chatid/:roomid',async (req,res)=>{
    const chats=await Chat.find({
        roomId: req.params.roomid
    })
    res.render('index',{
        name:'Girik ',
        id:req.params.roomid,
        chats:chats
    })
})
server.listen(3000, async () => {
    console.log('Server started')
    await connect();
    console.log('MongoDB connected')
})