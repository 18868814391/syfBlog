const state = {
  cachedRoutes: [], // 缓存路由
  pathAdd: '' // 当前路由的路径
}

const mutations = {
  SET_CACHED_ROUTES: (state, name) => {
    !state.cachedRoutes.includes(name) && state.cachedRoutes.push(name)
  },
  SET_PATHADD: (state, pathAdd) => {
    state.pathAdd = pathAdd
  }
}

const actions = {
  updateCachedRoutes({ commit }, name) {
    commit('SET_CACHED_ROUTES', name)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
