import axios from 'axios';
import Antd from 'ant-design-vue';
var Message = Antd.message;
// axios 配置
axios.defaults.timeout = 15000; //请求超时

axios.defaults.baseURL = '/apis';
//  http request 拦截器
axios.interceptors.request.use(config => {
    return config;
}, err => {
    return Promise.reject(err);
});
 
// http response 拦截器
axios.interceptors.response.use(response => {
    let data = {};
    if (response && response.data) {
        switch (Number(response.data.code)) {
            case 200:
                data = response.data;
                break;
            case 401: // 401 清除token信息并跳转到登录页面
                Message.error('身份过期，请重新登录');
                break;
            case 403: //无权限
                Message.error('身份过期，请重新登录');
                break;
            default:
                Message.error(response.data.msg);
                break;
        }
    }
    return data;
}, error => {
    Message.error('网络崩溃了！');
    return Promise.reject(error.response.data);
});

const http = ({
    url = '/', // DEFAULT_URL
    method = 'get', // DEFAULT_METHOD
    ...rest // REST_CONFIGS { data, headers, ... }  [OPTIONAL]
}) => axios({
    url: `${url}`,
    method,
    ...rest
});

export default http;
