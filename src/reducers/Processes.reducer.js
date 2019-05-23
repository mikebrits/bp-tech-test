import {
    ASSIGN_WORKER,
    MAX_PROCESS_WORKERS,
    REMOVE_WORKER,
    SET_PRIORITY,
    SET_STATUS,
    START_WORKING,
    TICK,
} from '../constants';
import ProcessReducer from './Process.reducer';

const initialState = {
    version: 0,
    processes: [
        {
            id: 1,
            maxWorkers: MAX_PROCESS_WORKERS,
            currentWorkers: 0,
            name: 'Order Coffee Beans',
            description: 'Contact the roaster, place an order, email receipt',
            priority: 0,
            assigned: false,
            status: 'Unassigned',
            startTime: null,
            totalTime: 0,
            tasks: [],
        },
        {
            id: 2,
            maxWorkers: MAX_PROCESS_WORKERS,
            currentWorkers: 0,
            name: 'Book Movie Tickets',
            description: 'Contact the ticket office, select seats, place an order, email receipt',
            priority: 0,
            assigned: false,
            status: 'Unassigned',
            startTime: null,
            totalTime: 0,
            tasks: [],
        },
        {
            id: 3,
            maxWorkers: MAX_PROCESS_WORKERS,
            currentWorkers: 0,
            name: 'Book Restaurant Table',
            description: 'Contact the reception, select time, place an order, email receipt',
            priority: 0,
            assigned: false,
            status: 'Unassigned',
            startTime: null,
            totalTime: 0,
            tasks: [],
        },
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ASSIGN_WORKER:
        case REMOVE_WORKER:
        case SET_PRIORITY:
        case SET_STATUS:
        case START_WORKING:
            const { id } = action.payload;
            return {
                ...state,
                processes: state.processes.map(
                    process => (process.id === id ? ProcessReducer(process, action) : process),
                ),
            };
        case TICK:
            return {
                ...state,
                processes: state.processes.map(process => ProcessReducer(process, action)),
            };
        default:
            return state;
    }
};