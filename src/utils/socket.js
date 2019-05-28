import io from 'socket.io-client';

export const socket = io('http://localhost:3003');

export const emit = (msg, data) => socket.emit(msg, data);

export const listen = (msg, fn) => {
    socket.on(msg, data => {
        fn(data);
    });
};
