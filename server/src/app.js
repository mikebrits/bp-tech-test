import { createStore } from 'redux';
import socket from 'socket.io';
import rootReducer from '../../src/reducers';
import { ASSIGN_WORKER, REMOVE_WORKER } from '../../src/constants';
import { assignWorker, removeWorker } from '../../src/actions/Process.actions';

const app = require('express')();
const http = require('http').createServer(app);

const io = socket(http);

const store = createStore(rootReducer);
const dispatch = store.dispatch;
const state = () => store.getState();

const getProcess = id => state().processes.processes.find(item => item.id === id);
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

    socket.on(ASSIGN_WORKER, ({ id }) => {
        dispatch(assignWorker({ id }));
        io.emit('refresh', getProcess(id));
    });

    socket.on(REMOVE_WORKER, ({ id }) => {
        dispatch(removeWorker({ id }));
    });
});

setInterval(() => {
    io.emit('tick');
}, 1000);

http.listen(3003, function() {
    console.log('listening on *:3003');
});
