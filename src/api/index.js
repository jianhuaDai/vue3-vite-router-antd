import http from '../http/interceptor.js';
const apis = {
    getList() {
        return http({
            url: '',
            method: 'get'
        })
    }
}
export default apis;