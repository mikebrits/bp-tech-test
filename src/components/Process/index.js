import Process from './Process';
import React, { useEffect, useState } from 'react';
import { socket } from '../../utils/socket';
import {addWorker, autoAssignProcess, removeWorker, runProcess, suspendProcess} from '../../api/processes.api';

const useProcessListener = initialValue => {
    const [process, setProcess] = useState(initialValue);
    useEffect(() => {
        socket.on('refresh-process-' + process.id, refreshedProcess => {
            setProcess(refreshedProcess);
        });
    }, []);

    return { process };
};

export default ({ data }) => {
    const { process } = useProcessListener(data);
    const { id } = process;

    return (
        <Process
            data={process}
            onAssignWorker={() => {
                addWorker(id);
            }}
            onRemoveWorker={() => {
                removeWorker(id);
            }}
            onRun={() => {
                runProcess(id);
            }}
            onSuspend={() => {
                suspendProcess(id);
            }}
            onAutoAssign={priority => {
                autoAssignProcess(id, priority)
            }}
        />
    );
};
