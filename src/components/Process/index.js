import Process from './Process';
import React, { useEffect, useState } from 'react';
import {listen} from '../../utils/socket';
import {
    addWorker,
    autoAssignProcess,
    removeWorker,
    runProcess,
    suspendProcess,
} from '../../api/processes.api';


const useProcessListener = initialValue => {
    const [process, setProcess] = useState(initialValue);
    useEffect(() => {
        listen('refresh-process-' + process.id, refreshedProcess => {
            setProcess(refreshedProcess);
        });
    }, [process.id]);

    return { process };
};

const _Process =  ({ data }) => {
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
                autoAssignProcess(id, priority);
            }}
        />
    );
};

export default _Process;