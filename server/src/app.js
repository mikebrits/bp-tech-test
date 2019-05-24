import { createStore }  from 'redux';
import socket from 'socket.io';
import rootReducer from '../../src/reducers';

const app = require('express')();
const http = require('http').createServer(app);

const io = socket(http);

const store = createStore(rootReducer);
const dispatch = store.dispatch;
const state = () => store.getState();

app.get('/', function(req, res) {
    res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    socket.on('message', message => {
        io.emit('message', { number: message });
    });
});

setInterval(() => {
    io.emit('tick');
}, 1000);

http.listen(3003, function() {
    console.log('listening on *:3003');
});
