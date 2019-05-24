import Process from './Process';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
    assignWorker,
    autoAssign,
    removeWorker,
    runProcess,
    setProcessPriority,
    suspendProcess,
} from '../../actions/Process.actions';

export default ({ data }) => {
    const dispatch = useDispatch();
    const { id } = data;

    return (
        <Process
            data={data}
            onAssignWorker={() => {
                dispatch(assignWorker({ id }));
            }}
            onRemoveWorker={() => {
                dispatch(removeWorker({ id }));
            }}
            onRun={() => {
                dispatch(runProcess({ id }));
            }}
            onSuspend={() => {
                dispatch(suspendProcess({ id }));
            }}
            onSetPriority={priority => {
                dispatch(setProcessPriority({ id, priority }));
                dispatch(autoAssign({ id, priority }));
            }}
        />
    );
};
