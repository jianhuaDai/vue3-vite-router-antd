import http from '../http/interceptor.js';
const apis = {
    getList() {
        return http({
            url: '../mock/index.json',
            method: 'get'
        })
    }
}
export default apis;