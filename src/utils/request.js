import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import config from '../../config/config'
import toast from './toast'

import store from '@/store'

const service = axios.create({
  baseURL: 'www.baidu.com',
  timeout:0// request timeout
})
service.interceptors.request.use(
    requestConfig => {
      let data = {
        // 公共请求参数
      };
      requestConfig.data = Object.assign({}, requestConfig.data, data)
      return requestConfig
    },
    error => {
      Promise.reject(error)
    }
)
// response interceptor
service.interceptors.response.use(response => {
  const res = response.data
  if (res.errno === 501) {
      MessageBox.alert('系统未登录，请重新登录', '错误', {
          confirmButtonText: '确定',
          type: 'error'
      }).then(() => {
      })
      return Promise.reject('error')
  } else if (res.errno === 502) {
      toast.showToast('系统内部错误，请联系管理员维护',1200,'error')
      return Promise.reject('error')
  } else if (res.errno === 503) {
      toast.showToast('请求业务目前未支持',1200,'error')
      return Promise.reject('error')
  } else if (res.errno === 504) {
      toast.showToast('更新数据已经失效，请刷新页面重新操作',1200,'error')
      return Promise.reject('error')
  } else if (res.errno === 505) {
      toast.showToast('更新失败，请再尝试一次',1200,'error')
      return Promise.reject('error')
  } else if (res.errno === 506) {
      toast.showToast('没有操作权限，请联系管理员授权',1200,'error')
      return Promise.reject('error')
  }  else {
      return response
    }
  }, error => {
    toast.showToast('登录连接超时',5 * 1000,'error')
    return Promise.reject(error)
  })
export default service
