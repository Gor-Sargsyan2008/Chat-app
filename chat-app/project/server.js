const express = require("express");
const path = require("path");
const socket = require("socket.io");
const http = require("http");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
const io = socket(server);

io.on("connection", (socket) => {
    socket.emit('message', 'welcome')
    socket.broadcast.emit('message', 'a user connected!')

    socket.on('disconnect', () => {
        io.emit('message', 'A user just left!')
    })
});


server.listen(3000, () => {
    console.log("running on 3000");
});