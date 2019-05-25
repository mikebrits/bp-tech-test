import {
    getProcesses,
    getProcess,
    addWorker,
    removeWorker, run, suspend, autoAssign,
} from '../../controllers/processes.controller';

const processes = require('express').Router();

processes.get('/', (req, res) => {
    const processes = getProcesses();
    res.send(processes);
});

processes.get('/:id', (req, res) => {
    const process = getProcess(req.params.id);
    res.send(process);
});

processes.put('/:id/add-worker', (req, res) => {
    addWorker(req.params.id);
    res.status(200);
    const process = getProcess(req.params.id);
    res.send(process);
});

processes.put('/:id/remove-worker', (req, res) => {
    removeWorker(req.params.id);
    res.status(200);
    const process = getProcess(req.params.id);
    res.send(process);
});

processes.put('/:id/run', (req, res) => {
    run(req.params.id);
    res.status(200);
    const process = getProcess(req.params.id);
    res.send(process);
});

processes.put('/:id/suspend', (req, res) => {
    suspend(req.params.id);
    res.status(200);
    const process = getProcess(req.params.id);
    res.send(process);
});

processes.put('/:id/auto-assign', (req, res) => {
    autoAssign(req.params.id, req.body.priority);
    res.status(200);
    const process = getProcess(req.params.id);
    res.send(process);
});



export default processes;
