import service from '@/libs/request'
let WECHAT = ''

WECHAT = process.env.NODE_ENV === 'development' ? '/wechat' : '/wechat'

/**
 * API接口地址配置文件
 */

const api = {
  reqWxConfig: `${WECHAT}/applets/wechatScan` // 微信sdk初始化
}

export function getAreaList(params) {
  return service({
    url: api.reqWxConfig,
    method: 'get',
    params
  })
}

