'use strict';

const { createStore } = require('redux/index');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const { combineReducers } = require('redux/index');
const processes = require('../../src/reducers/Processes.reducer');
const general = require('../../src/reducers/general.reducer');


const store = createStore(combineReducers({ processes, general }));
const dispatch = store.dispatch;

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
