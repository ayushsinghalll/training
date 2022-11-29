const WebSocket = require("ws");

//from WebSocket.Server assign a port and store it in wss
const wss= new WebSocket.Server({port:8002});

wss.on('connection',ws=>{
    console.log('new client got connected');
    ws.on('message',data=>console.log(`received data ${data}`));
    ws.on('close',()=>{console.log('client disconnected')})
});

