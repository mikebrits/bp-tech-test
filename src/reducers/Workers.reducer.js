import { MAX_TOTAL_WORKERS } from '../constants';

const initialState = {
    total: MAX_TOTAL_WORKERS,
    available: MAX_TOTAL_WORKERS,
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
