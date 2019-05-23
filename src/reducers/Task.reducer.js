const initialState = {
    id: null,
    process: null,
    computationRemaining: 0,
    percentageComplete: 0,
    workers: 0, // Could be an array?
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
