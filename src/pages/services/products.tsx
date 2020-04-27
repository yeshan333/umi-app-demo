import request from '../../utils/request';

/**
 * 获取数据
 * @param {*} params
 */
export async function getData() {
  return request(`/api/users/1`, {method: 'GET'});
}



