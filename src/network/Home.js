import { request } from "./request";

export function getHomeMul() {
    return request({
        url: '/home/multidata'

    })
}