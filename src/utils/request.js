import axios from 'axios'

const isDebugging = () => localStorage.debug

// create axios instance
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // base url
  withCredentials: true, // wether send cookie when crossing origin
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
    return Promise.reject(error)
  }
)

// response interceptor
request.interceptors.response.use(
  response => {
    const res = response.data
    if (isDebugging()) {
      const url = response.config.baseURL + response.config.url
      console.log(
        `%c${url}\n%c${JSON.stringify(res)}`,
        'color:blue',
        'color:green'
      )
    }
    if (response.status !== 200) {
      return Promise.reject(new Error('error'))
    } else {
      return res
    }
  },
  error => {
    if (isDebugging()) {
      const url = error.config.baseURL + error.config.url
      console.log(
        `%c${url}\n%c${JSON.stringify(url)}`,
        'color:blue',
        'color:green'
      )
    }
    return Promise.reject(error)
  }
)

export default request
