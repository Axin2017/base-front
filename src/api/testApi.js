import request from '../utils/request'

/**
 * api用例测试
 *
 * @param {object} data
 * @returns {Promise}
 */
function test(data) {
  return request({
    method: 'get',
    url: '/waterEcology/getWaterConservation',
    params: data
  })
}

export default {
  test
}
