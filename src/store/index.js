import { createStore } from 'vuex';
import language from './modules/language';

const store = createStore({
  modules: {
    language, // 언어 모듈 추가
  },
});

export default store;
