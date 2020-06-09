/**
 * Created By WiFi ON 2019/7/17 11:24
 */

import { API } from '@/js/api/index'
import request from '@/js/request'
const module = 'DEVICE_MODEL_NO';
export default {
  /**
   * 获取列表
   */
  getDeviceModelNoList(data) {
    return request({
      url: API[module].GET_LIST,
      method: 'post',
      data:data,
    })
  },
  /**
   * 添加
   */
  addDeviceModelNo(data){
    return request({
      url: API[module].ADD,
      method: 'post',
      data:data,
    })
  },
  /**
   * 删除
   */
  deleteDeviceModelNo (params){
    return request({
      url: API[module].DELETE + params.id,
      method: 'delete',
    })
  },
  /**
   * 修改
   */
  updateDeviceModelNo (data){
    return request({
      url: API[module].UPDATE,
      method: 'post',
      data:data,
    })
  },
  getDetailById(params) {
    return request({
      url: `${API[module].GET_ONE}${params.sn}`,
      method: 'get',
    })
  },
}
