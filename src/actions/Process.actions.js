import { ASSIGN_WORKER, REMOVE_WORKER, SET_PRIORITY, SET_STATUS } from '../constants';

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
export const runProcess = ({ id }) => setProcessStatus({ id, assigned: true, status: 'Running' });
export const suspendProcess = ({ id }) =>
    setProcessStatus({ id, assigned: false, status: 'Unassigned' });

export const setProcessPriority = ({ id, priority }) => ({
    type: SET_PRIORITY,
    payload: {
        id,
        priority,
    },
});
