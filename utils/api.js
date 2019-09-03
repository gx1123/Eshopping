import request from './request.js'

const GET = 'GET';
const POST = "POST";
const DELETE = 'DELETE';
const PUT = "PUT";


const apis = (domain) => {
  let { url } = domain;  // 域名
  return new class {
    getShopList(data) {  //获取商城列表 示例
      return request(`${url}/getShopList`, GET, data)
    }
  }
}
export default apis