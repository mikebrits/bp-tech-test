import {MAX_PROCESS_WORKERS} from "../constants";

const initialState = {
    id: null,
    maxWorkers : MAX_PROCESS_WORKERS,
    currentWorkers: 0,
    name: '',
    description: '',
    priority: 2,
    assigned: false,
    startTime: null,
    tasks: []
};

export default (state = initialState, action) => {
    switch(action.type){
        default: return state;
    }
}