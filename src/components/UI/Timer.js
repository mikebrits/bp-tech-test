import React, { useEffect, useRef } from 'react';
import { socket } from '../../utils/socket';

export default ({ onTick, delay = 1000 }) => {
    // Remember the latest callback.
    useEffect(
        () => {
            socket.on('tick', () => onTick());
        },
        [onTick],
    );

    return null;
};
