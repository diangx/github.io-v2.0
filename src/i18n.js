import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import kr from './locales/kr.json';

const messages = {
  en,
  kr,
};

const i18n = createI18n({
  locale: 'en', // 기본 언어
  fallbackLocale: 'en', // 기본 언어가 없을 때 대체 언어
  messages,
});

export default i18n;
