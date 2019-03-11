import Vue from 'vue'
import VueI18n from 'vue-i18n'

import idLocale from '@/i18n/locales/id'
import enLocale from '@/i18n/locales/en'

Vue.use(VueI18n)

const messages = {
  id: idLocale,
  en: enLocale
}

const i18n = new VueI18n({
  locale: 'id', // set locale
  messages // set locale messages
})

export default i18n
