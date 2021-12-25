import { HEADER_KEY_LIST } from '../plugins/field'

export const state = () => ({
  compornentHeights: {},
  selectTab: 0,
  tabScrollEvent: true,
})
export const getters = {
  getAppScrollCompornentHeights(state) {
    return state.compornentHeights
  },
  getAppScrollSelectTab(state) {
    return state.selectTab
  },
  getTabScrollEvent(state) {
    return state.tabScrollEvent
  },
}
export const mutations = {
  SET_COMPORNENT_HEIGHT(state, { key, height }) {
    state.compornentHeights[key] = height
  },
  SET_SELECT_TAB(state, { selectTab }) {
    state.selectTab = selectTab
  },
  SET_TAB_SCROLL_EVENT(state, scrollEvent) {
    state.tabScrollEvent = scrollEvent
  },
}
export const actions = {
  setAppScrollCompornentHeight({ commit }, { key, height }) {
    commit('SET_COMPORNENT_HEIGHT', { key, height })
  },
  setAppScrollSelectTab({ state, commit }, { scrollY }) {
    let selectTab = 0
    const adjustment = 100
    for (let tab = 0; tab < HEADER_KEY_LIST.length; tab++) {
      if (
        state.compornentHeights[HEADER_KEY_LIST[tab]] <=
        scrollY + adjustment
      ) {
        selectTab = tab
      }
    }
    commit('SET_SELECT_TAB', { selectTab })
  },
  setAppScrollTabScrollEvent({ commit }, scrollEvent) {
    commit('SET_TAB_SCROLL_EVENT', scrollEvent)
  },
  setAppScrollTabScrollEventTrue({ commit }) {
    commit('SET_TAB_SCROLL_EVENT', true)
  },
}
