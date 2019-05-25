import { get, put } from './http';
const route = 'processes';

export const getProcesses = async () => {
    return await get(route);
};

export const addWorker = async id => {
    return await put(`${route}/${id}/add-worker`);
};

export const removeWorker = async id => {
    return await put(`${route}/${id}/remove-worker`);
};

export const runProcess = async id => {
    return await put(`${route}/${id}/run`);
};

export const suspendProcess = async id => {
    return await put(`${route}/${id}/suspend`);
};

export const autoAssignProcess = async (id, priority) => {
    return await put(`${route}/${id}/auto-assign`, { priority });
};
