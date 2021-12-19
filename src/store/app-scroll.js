import { HEADER_KEY_LIST } from '../plugins/feald'

export const state = () => ({
  compornentHeights: {},
  selectTab: 0,
})
export const getters = {
  getAppScrollCompornentHeights(state) {
    return state.compornentHeights
  },
  getAppScrollSelectTab(state) {
    return state.selectTab
  },
}
export const mutations = {
  SET_COMPORNENT_HEIGHT(state, { key, height }) {
    state.compornentHeights[key] = height
  },
  SET_SELECT_TAB(state, { selectTab }) {
    state.selectTab = selectTab
  },
}
export const actions = {
  setAppScrollCompornentHeight({ commit }, { key, height }) {
    commit('SET_COMPORNENT_HEIGHT', { key, height })
  },
  setAppScrollSelectTab({ state, commit }, { scrollY }) {
    let selectTab = 0
    for (let tab = 0; tab < HEADER_KEY_LIST.length; tab++) {
      if (state.compornentHeights[HEADER_KEY_LIST[tab]] <= scrollY) {
        selectTab = tab
      }
    }
    commit('SET_SELECT_TAB', { selectTab })
  },
}
