import {
    ASSIGN_WORKER,
    AUTO_ASSIGN,
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
    totalTime: 0,
    computationRemaining: 0,
    percentageComplete: 0,
    timeRemaining: 0,
    icon: 'cog',
    changed: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case START_WORKING:
            return state.assigned
                ? {
                      ...state,
                      running: true,
                      status: 'Running',
                      computationRemaining: state.computationRemaining || state.totalTime,
                      timeRemaining: Math.floor(
                          (state.computationRemaining || state.totalTime) / state.currentWorkers,
                      ),
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
        case AUTO_ASSIGN:
            return {
                ...state,
                status: state.status === 'Unassigned' ? 'Assigned' : state.status,
                assigned: true,
                currentWorkers: action.payload.priority * 5,
                priority: action.payload.priority,
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
            if (!state.running) {
                return {
                    ...state,
                    changed: false,
                };
            }
            const computationRemaining =
                state.computationRemaining >= state.currentWorkers
                    ? state.computationRemaining - state.currentWorkers
                    : 0;
            const done = computationRemaining === 0;
            return {
                ...state,
                computationRemaining,
                percentageComplete: 100 - (computationRemaining / state.totalTime) * 100,
                status: done ? 'Completed' : state.status,
                running: !done,
                currentWorkers: done ? 0 : state.currentWorkers,
                assigned: !done,
                priority: done ? 0 : state.priority,
                timeRemaining: Math.floor(computationRemaining / state.currentWorkers),
                changed: true,
            };
        default:
            return state;
    }
};
