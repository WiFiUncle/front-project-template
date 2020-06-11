/**
 * Created By WiFi_Uncle ON 2019/5/8 17:45
 */

/************后台地址配置****************************/

const DEBUG = 3;
const PROTOCOL_DEBUG = 1; //网络请求协议    0 https, 1 http
const PORT_DEBUG = 1; //
/************后台地址配置****************************/

const PROTOCOL = ['https', 'http'][PROTOCOL_DEBUG]; //'https'; //
const PORT = ['', '8080', '443', '80'][PORT_DEBUG];//; //后台端口
const IP = ['www.produce.com',//正式服务器
  'www.test.com', //测试服
  'www.dev.com', //开发服
  '10.0.0.1',//A后端
  '10.0.0.2',//B后端
][DEBUG];
const SERVER_URL = PORT ? `${PROTOCOL}://${IP}:${PORT}` : `${PROTOCOL}://${IP}`;
export default {
  SERVER_URL,
}

/**
 * 也可通过编译打包时配置
 * process
 */

