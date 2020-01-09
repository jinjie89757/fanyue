import { get, post } from './http';

export function getBookList(params) {
    let url = "/api/getstoreimg1";
    return get({ url, params });
}

export function getBooKShow(params) {
    let url = '/api/getbookshow';
    return get({ url, params })
}


export function getBookDetail(params) {
    let url = '/api/getbookdetail'
    return post({ url, params })
}

