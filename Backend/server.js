const { METHODS } = require('http');

const app = require('express') ();
const server = require('http').createServer(app);


const io =require('socket.io')(server,{
    cors:{
        origin:"*"
        
    }
})

io.on('connection',()=>{
     console.log("what is socket",socket);
     console.log ("server is active to be conntected")

socket.on("chat",(payload)=>{
    console.log("what is payload",payload);
    io.emit("chat",payload)
});

});
// app.listen(5000,()=> console.log('server is active...'))
server.listen(5000,()=>{
    console.log("server is listening at port 5000...");
})