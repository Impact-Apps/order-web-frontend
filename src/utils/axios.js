import axios from 'axios'
import API_CONSTANTS from '@/constants/api'


const interceptors = {
  responseError: (store, router, error) => {
    return Promise.reject(error);
  },
};

const install = (Vue, options) => {
    
    axios.defaults.baseURL = API_CONSTANTS.BASE_URL,
    axios.defaults.timeout = API_CONSTANTS.TIMEOUT
    axios.interceptors.request.use(function (config) {
        return config
    })

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
    // Do something with response data
        return response.data
    }, function (error) {
    // Do something with response error
        return Promise.reject(error)
    })

    axios.interceptors.response.use(
        null,
        interceptors.responseError.bind(null, options.store, options.router)
    );

    Vue.prototype.$http = axios;
};

export default {
  interceptors, 
  install,
};
