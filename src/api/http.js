import { API_URL } from './constants.api';

const defaultRequest = {
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
};

export const get = (route = '') => {
    return fetch(API_URL + route).then(res => res.json());
};

export const post = (route = '', data) => {
    return fetch(API_URL + route, {
        method: 'POST',
        body: data,
        ...defaultRequest,
    }).then(res => res.json());
};

export const put = (route = '', data) => {
    return fetch(API_URL + route, {
        method: 'PUT',
        body: data,
        ...defaultRequest,
    }).then(res => res.json());
};
