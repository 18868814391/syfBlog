// import Cookies from 'js-cookie'
// import config from '@/config'

import Cookies from 'js-cookie'

export function getThename() {
  return Cookies.get('Thename')
}
export function getadmin() {
  return Cookies.get('admin')
}

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = url => {
  const keyValueArr = url.split('?')[1].split('&')
  const paramObj = {}
  keyValueArr.forEach(item => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = keyValue[1]
  })
  return paramObj
}

// 判断两个时间相隔多少分钟
export function getRemainMinute(startTime) {
  let s1 = new Date(startTime.replace(/-/g, '/'))
  let s2 = new Date()
  let runTime = parseInt((s1.getTime() - s2.getTime()) / 1000)
  let minute = Math.floor(runTime / 3600 * 60)
  // console.log(minute)
  // if (minute < 0) {
  //   return true
  // }
  return minute
}
// dateFormater('YYYY-MM-DD HH:mm', t) ==> 2019-06-26 18:30
// dateFormater('YYYYMMDDHHmm', t) ==> 201906261830
export function dateFormater(t, formater) {
  formater = formater || 'YYYY-MM-DD HH:mm'
  let date = t ? new Date(t) : new Date()
  let Y = date.getFullYear() + ''
  let M = date.getMonth() + 1
  let D = date.getDate()
  let H = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  return formater.replace(/YYYY|yyyy/g, Y)
    .replace(/YY|yy/g, Y.substr(2, 2))
    .replace(/MM/g, (M < 10 ? '0' : '') + M)
    .replace(/DD/g, (D < 10 ? '0' : '') + D)
    .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
    .replace(/mm/g, (m < 10 ? '0' : '') + m)
    .replace(/ss/g, (s < 10 ? '0' : '') + s)
}
