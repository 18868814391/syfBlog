import debounceOrigin from 'lodash/debounce'

// 节流
export const debounce = (
  f,
  t = 1000,
  le = true,
  tr = false
) => {
  if (typeof f !== 'function') return
  return debounceOrigin(f, t, { leading: le, trailing: tr })
}

// export { default as qs } from 'querystring'

// export { default as cloneDeep } from 'lodash/cloneDeep'

export { default as isNumber } from 'lodash/isNumber'
