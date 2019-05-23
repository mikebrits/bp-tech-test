import {
    ASSIGN_WORKER,
    MAX_PROCESS_WORKERS,
    PAUSE_WORKING,
    REMOVE_WORKER,
    SET_PRIORITY,
    SET_STATUS,
    START_WORKING,
    TICK,
} from '../constants';
import WorkerReducer from './Workers.reducer';

const initialState = {
    id: null,
    maxWorkers: MAX_PROCESS_WORKERS,
    currentWorkers: 0,
    name: '',
    description: '',
    priority: 2,
    assigned: false,
    status: 'Unassigned',
    startTime: null,
    tasks: [],
    running: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case START_WORKING:
            return state.assigned
                ? {
                      ...state,
                      running: true,
                      status: 'Running',
                  }
                : state;
        case PAUSE_WORKING:
            return {
                ...state,
                running: false,
                status: 'Paused',
            };
        case ASSIGN_WORKER:
            return {
                ...state,
                assigned: true,
                status: state.status === 'Unassigned' ? 'Assigned' : state.status,
                currentWorkers:
                    state.currentWorkers < state.maxWorkers
                        ? state.currentWorkers + 1
                        : state.currentWorkers,
            };
        case REMOVE_WORKER:
            return {
                ...state,
                status: state.currentWorkers === 1 ? 'Unassigned' : state.status,
                running: state.currentWorkers === 1 ? false : state.running,
                assigned: state.currentWorkers > 1,
                currentWorkers:
                    state.currentWorkers > 0 ? state.currentWorkers - 1 : state.currentWorkers,
            };
        case SET_PRIORITY:
            return {
                ...state,
                priority: action.payload.priority,
            };
        case SET_STATUS:
            return {
                ...state,
                assigned: action.payload.assigned,
                status: action.payload.status,
            };
        case TICK:
            return {
                ...state,
                workers: state.workers.map(worker => WorkerReducer(worker, action)),
            };
        default:
            return state;
    }
};
