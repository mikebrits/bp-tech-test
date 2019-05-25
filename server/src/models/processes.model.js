import { state } from '../store';

export const getProcesses = () => state().processes.processes;
export const getRunningProcesses = () => state().processes.processes.filter(p => p.running);
export const getChangedProcesses = () => state().processes.processes.filter(p => p.changed);
export const getProcess = id => state().processes.processes.find(item => item.id === id);
