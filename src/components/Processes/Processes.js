import React, { useState, useEffect } from 'react';
import { Container, Error } from './Processes.styled-components';
import Process from '../Process';
import { getProcesses } from '../../api/processes.api';
import { socket } from '../../utils/socket';
import { useStateValue } from '../../state/context';

const Processes = () => {
    const { processes, loading, error } = useProcesses();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <Error>
                <b>There was an error getting the processes. Make sure the server is running.</b>
                <br />
                {error}
            </Error>
        );
    }

    return (
        <Container>
            {processes.length
                ? processes.map((process, index) => <Process key={index} data={process} />)
                : 'No matching processes found'}
        </Container>
    );
};
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

export default Processes;
