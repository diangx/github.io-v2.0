import i18n from '../../i18n';

const state = {
  selectedLanguage: 'en', // 초기 언어 설정
};

const getters = {
  getSelectedLanguage: (state) => state.selectedLanguage,
};

const mutations = {
  setLanguage(state, language) {
    state.selectedLanguage = language;
    i18n.global.locale = language; // i18n의 언어를 동기화
  },
};

const actions = {
  updateLanguage({ commit }, language) {
    commit('setLanguage', language); // Mutation 호출
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
