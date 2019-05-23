export const getProcesses = state => state.processes.processes;

export const getFilteredProcesses = searchTerm => state =>
    state.processes.processes.filter(
        process =>
            process.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            process.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );

export const getSearchTerm = state => state.general.searchTerm;
