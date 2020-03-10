import axios from '../../src/index'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import { doesNotReject } from 'assert'

/* withCredentials */

// document.cookie = 'a=b'

// axios.get('/more/get').then(res => {
//   console.log(res)
// })

// axios.post('http://127.0.0.1:8088/more/server2', {}, {
//   withCredentials: true
// }).then(res => {
//   console.log(res)
// })

/* XSRF防御 */

// const instance = axios.create({
//   xsrfCookieName: 'XSRF-TOKEN-D',
//   xsrfHeaderName: 'X-XSRF-TOKEN-D'
// })

// instance.get('/more/get').then(res => {
//   console.log(res)
// })

/* 上传和下载的进度监控 */

// const instance = axios.create()

// function calculatePercentage(loaded: number, total: number) {
//   return Math.floor(loaded * 1.0) / total
// }

// function loadProgressBar() {
//   const setupStartProgress = () => {
//     instance.interceptors.request.use(config => {
//       NProgress.start()
//       return config
//     })
//   }

//   const setupUpdateProgress = () => {
//     const update = (e: ProgressEvent) => {
//       console.log(e)
//       NProgress.set(calculatePercentage(e.loaded, e.total))
//     }
//     instance.defaults.onDownloadProgress = update
//     instance.defaults.onUploadProgress = update
//   }

//   const setupStopProgress = () => {
//     instance.interceptors.response.use(response => {
//       NProgress.done()
//       return response
//     }, error => {
//       NProgress.done()
//       return Promise.reject(error)
//     })
//   }

//   setupStartProgress()
//   setupUpdateProgress()
//   setupStopProgress()
// }

// loadProgressBar()

// const downloadE1 = document.getElementById('download')

// downloadE1.addEventListener('click', e => {
//   instance.get('https://img.mukewang.com/5cc01a7b0001a33718720632.jpg')
// })

// const downloadE2 = document.getElementById('upload')

// downloadE2.addEventListener('click', e => {
//   const data = new FormData()
//   const fileE1 = document.getElementById('file') as HTMLInputElement
//   if (fileE1.files) {
//     data.append('file', fileE1.files[0])

//     instance.post('/more/upload', data)
//   }
// })

/* HTTP 授权 */

axios.post('/more/post', {
  a: 1
}, {
  auth: {
    username: 'Yes',
    password: '123456'
  }
}).then(res => {
  console.log(res)
})
