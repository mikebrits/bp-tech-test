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
import {emit} from "../../utils/socket";
import {ASSIGN_WORKER} from "../../constants";

export default ({ data }) => {
    const dispatch = useDispatch();
    const { id } = data;

    return (
        <Process
            data={data}
            onAssignWorker={() => {
                dispatch(assignWorker({ id }));
                emit(ASSIGN_WORKER, {id});
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
