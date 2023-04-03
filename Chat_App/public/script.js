var socket = io();

let btn=document.getElementById('btn');
let inputMsg=document.getElementById('newMsg');
let msgList=document.getElementById('msgList');

// btn.addEventListener('click', function () {
//     socket.emit('from_client');
// });

btn.addEventListener('click',function (){
    socket.emit('msg_send',{
        msg:inputMsg.value
    })
})

socket.on('msg_rcvd',(data)=>{
    let limsg=document.createElement('li');
    limsg.innerText=data.msg;
    msgList.appendChild(limsg)
})

socket.on('from_server',()=>{
    // console.log("Collected a new event from server")
    const div=document.createElement('div');
    div.innerText='New event from server';
    document.body.appendChild(div);
})