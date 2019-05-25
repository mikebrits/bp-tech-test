import React, { useState, useEffect } from 'react';
import { Container } from './Processes.styled-components';
import Process from '../Process';
import { getProcesses } from '../../api/processes.api';
import { socket } from '../../utils/socket';
import { useStateValue } from '../../utils/context';

const useProcesses = () => {
    const [processes, setProcesses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [{ searchTerm }] = useStateValue();

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

    return { loading, error, processes: processes && filterProcesses(searchTerm, processes) };
};

const filterProcesses = (searchTerm, processes) =>
    processes.filter(
        process =>
            process.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            process.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );

const Processes = () => {
    const { processes, loading, error } = useProcesses();

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
