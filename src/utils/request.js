import axios from 'axios'
import API_CONSTANTS from '@/constants/api'

let axiosInstance

function init (axios) {
    axiosInstance = axios.create({
        baseURL: API_CONSTANTS.BASE_URL,
        timeout: API_CONSTANTS.TIMEOUT
    })

    axiosInstance.interceptors.request.use(function (config) {
        // Do something before request is sent
        return config
    })

    // Add a response interceptor
    axiosInstance.interceptors.response.use(function (response) {
        // Do something with response data
        return response.data
    }, function (error) {
        // Do something with response error
        return Promise.reject(error)
    })
}

const request = {
    init,
    setHeader (header, post = false) {
        axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'
        if (post) {
            axiosInstance.defaults.headers.post[header.key] = header.value
        } else {
            axiosInstance.defaults.headers.common[header.key] = header.value
        }
    },

    fetch (url, data) {
        return axiosInstance.get(url, {
            params: data
        })
    },

    create (url, data) {
        return axiosInstance.post(url, data)
    },

    update (url, data) {
        return axiosInstance.put(url, data)
    },

    delete (url, id) {
        return axiosInstance.delete(url, { params: { id: id } })
    }
}

request.init(axios)

export default request
