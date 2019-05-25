import React, { useState, useEffect } from 'react';
import { Container } from './Processes.styled-components';
import Process from '../Process';
import { getProcesses } from '../../api/processes.api';
import {socket} from "../../utils/socket";

const useProcesses = searchTerm => {
    const [processes, setProcesses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const refresh = () => {
        setLoading(true);
        getProcesses()
            .then(procs => {
                setProcesses(procs);
                setLoading(false);
            })
            .catch(e => {
                setError(e + '');
                setLoading(false);
            });
    };
    useEffect(() => {
        refresh();
        socket.on('refresh-all', refresh);

    }, []);

    return { loading, error, processes };
};

const Processes = () => {

    const { processes, loading, error } = useProcesses('');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Container>
            {processes.length
                ? processes.map((process, index) => <Process key={index} data={process} />)
                : 'No matching processes found'}
        </Container>
    );
};

export default Processes;
