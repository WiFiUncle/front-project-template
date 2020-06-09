/**
 * Created By WiFi_Uncle ON 2019/5/8 18:32
 */
import AUTH_PRE from './authPre';
const module = AUTH_PRE+ "/user";
export default {
  /**
   * 添加
   */
  ADD_USER_URL:  module + '/add',

  /**
   *  删除
   *  type: delete
   */
  DELETE_USER_URL: module + '/',

  /**
   *  修改
   */
  UPDATE_USER_INFO_URL:  module + '/user/update',

  /**
   * 获取列表
   */
  GET_USER_LIST_URL:  module + '/list',

  /**
   * 获取详情
   * type: get
   */
  GET_USER_INFO_URL: module + '/',

}
