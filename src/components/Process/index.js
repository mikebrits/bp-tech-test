import Process from './Process';
import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import {
    assignWorker,
    autoAssign,
    removeWorker,
    runProcess,
    setProcessPriority,
    suspendProcess,
} from '../../actions/Process.actions';
import {socket, emit} from "../../utils/socket";
import {ASSIGN_WORKER} from "../../constants";

export default ({ data }) => {
    const dispatch = useDispatch();
    const [process, setProcess] = useState(data);
    const { id } = process;

    useEffect(() => {
        socket.on('refresh', (refreshedProcess) => {
            if(id === refreshedProcess.id){
                setProcess(refreshedProcess);
                //dispatch(assignWorker({ id }));
            }
        });
    }, []);

    return (
        <Process
            data={process}
            onAssignWorker={() => {

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
