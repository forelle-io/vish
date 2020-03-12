import axios from 'axios'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

axios.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    // TODO server response errors handler
    if (error.response.status >= 500) {
        return Promise.reject(error)
    } else if (error.response.status >= 400 && error.response.status < 500) {
        return Promise.reject(error)
    } else {
        return Promise.reject(error)
    }
})

const http = ({ method, url, data, headers } = {}) => {
    return axios({
        method,
        url,
        data,
        headers,
        cancelToken: source.token
    })
}

export default http