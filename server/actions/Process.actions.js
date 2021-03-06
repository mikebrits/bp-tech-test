import {
    ASSIGN_WORKER,
    AUTO_ASSIGN,
    PAUSE_WORKING,
    REMOVE_WORKER,
    SET_PRIORITY,
    SET_STATUS,
    START_WORKING,
    TICK,
} from '../constants';

export const assignWorker = ({ id }) => ({
    type: ASSIGN_WORKER,
    payload: {
        id,
    },
});

export const removeWorker = ({ id }) => ({
    type: REMOVE_WORKER,
    payload: { id },
});

const setProcessStatus = ({ id, assigned, status }) => ({
    type: SET_STATUS,
    payload: {
        id,
        assigned,
        status,
    },
});

export const runProcess = ({ id }) => ({
    type: START_WORKING,
    payload: {
        id,
    },
});

export const suspendProcess = ({ id }) => ({
    type: PAUSE_WORKING,
    payload: {
        id,
    },
});

export const setProcessPriority = ({ id, priority }) => ({
    type: SET_PRIORITY,
    payload: {
        id,
        priority,
    },
});

export const tick = () => ({
    type: TICK,
    payload: {},
});

export const autoAssign = ({ id, priority }) => ({
    type: AUTO_ASSIGN,
    payload: {
        id,
        priority,
    },
});
