export const getFilteredProcesses = searchTerm => state =>
    state.processes.processes.filter(
        process =>
            process.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            process.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );
