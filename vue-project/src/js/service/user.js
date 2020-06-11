
import API from '@/js/api'
import request from '@/js/request'
export default {
  /**
   * 用户登录
   */
  login (data) {
    return request({
      url: API.USER.LOGIN,
      method: 'post',
      data: data
    })
  },
}
