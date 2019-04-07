import axios from 'axios'

const isDebugging = () => localStorage.debug

// create axios instance
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,// base url
  withCredentials: true,// wether send cookie when crossing origin
  timeout: 8000
})

// request interceptor
request.interceptors.request.use(
  config => {
    // Do something before request is sent

    return config
  },
  error => {
    // Do something with request error
    isDebugging && console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
request.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      return Promise.reject('error')
    } else {
      return res
    }
  },
  error => {
    isDebugging && console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default request
