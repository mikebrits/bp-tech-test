import socket from "socket.io";

let io;

const init = (http) => {
    io = socket(http);
    io.on('connection', function(socket) {
        console.log('a user connected');
        socket.on('disconnect', function() {
            console.log('user disconnected');
        });
        io.emit('refresh-all');
    });

};

export const notify = (msg, data) => {
    io.emit(msg, data);
};

export default init;