import request from '@/utils/request'


/**
 * 获取地图服务图层树数据
 *
 * @returns {Promise}
 */
function getServiceResourceTreeData() {
  return request({
    method: 'get',
    url: window.shareBackendUrl + '/powerapigateway/openapiservice/map/getServiceResourceTree'
  })
}

export { getServiceResourceTreeData }
