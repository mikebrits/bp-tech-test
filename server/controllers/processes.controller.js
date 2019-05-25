import {
    getProcesses as _getProcesses,
    getProcess as _getProcess,
    getRunningProcesses, getChangedProcesses,
} from '../src/models/processes.model';
import { dispatch } from '../src/store';
import {
    assignWorker,
    autoAssign as autoAssignAction,
    removeWorker as removeWorkerAction,
    runProcess,
    setProcessPriority,
    suspendProcess,
    tick as tickAction,
} from '../actions/Process.actions';
import { notify } from '../src/socket';
import _ from 'lodash';

export const getProcesses = () => {
    return _getProcesses();
};

export const getProcess = id => {
    return _getProcess(id);
};

export const addWorker = id => {
    dispatch(assignWorker({ id }));
    notify('refresh-process-' + id, _getProcess(id));
};

export const removeWorker = id => {
    dispatch(removeWorkerAction({ id }));
    notify('refresh-process-' + id, _getProcess(id));
};

export const run = id => {
    dispatch(runProcess({ id }));
    notify('refresh-process-' + id, _getProcess(id));
};

export const suspend = id => {
    dispatch(suspendProcess({ id }));
    notify('refresh-process-' + id, _getProcess(id));
};

export const autoAssign = (id, priority) => {
    dispatch(setProcessPriority({ id, priority }));
    dispatch(autoAssignAction({ id, priority }));
    notify('refresh-process-' + id, _getProcess(id));
};

export const tick = () => {
    dispatch(tickAction());
    getChangedProcesses().forEach(process => {
        notify('refresh-process-' + process.id, process);
    });
    // notify('refresh-all');
};
