import { get, post } from './http'

export function getEverySearch(params) {
    let url = "/api/geteverysearching";
    return get({ url, params });
}