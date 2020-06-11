import Service from '@/js/service/index'

export default {
  state: {
    /* token: getToken(), */
    userInfo: {}
  },
  mutations: {
  },
  actions: {
    // 登录
    login ({commits}, params) {
      console.log(commits)
      return new Promise((resolve, reject) => {
        Service.USER.login(params).then(rsp => {
          sessionStorage.userInfo = JSON.stringify(rsp.data)
          resolve(rsp)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getUserInfo ({commits}, id) {
      console.log(commits)
      return new Promise((resolve, reject) => {
        Service.USER.getUserInfo(id).then(rsp => {
          sessionStorage.userInfo = JSON.stringify(rsp.data)
          resolve(rsp)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
