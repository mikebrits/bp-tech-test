import {createStore} from "redux";
import rootReducer from "../reducers";

const store = createStore(rootReducer);
export const dispatch = (action) => {
    store.dispatch(action);
};

export const state = () => store.getState();