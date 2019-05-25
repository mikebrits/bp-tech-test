import { API_URL } from './constants.api';

export const get = (route = '') => {
    return fetch(API_URL + route).then(res => res.json());
};

export const post = (route = '') => {
    return fetch(API_URL + route, { method: 'POST' }).then(res => res.json());
};

export const put = (route = '') => {
    return fetch(API_URL + route, { method: 'PUT' }).then(res => res.json());
};