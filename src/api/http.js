import { API_URL } from './constants.api';

export const get = (route = '') => {
    return fetch(API_URL + route).then(res => res.json());
};

export const post = (route = '', data) => {
    return fetch(API_URL + route, {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res.json());
};

export const put = (route = '', data) => {
    return fetch(API_URL + route, {
        method: 'PUT',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .catch(e => console.error(e));
};
