import {mapGetters} from 'vuex'

const LANGS = ['en', 'id']
export default {
  data () {
    return {
      LANGS
    }
  },
  computed: {
    ...mapGetters(['userData'])
  },
  methods: {
    changeLang (id) {
      this.$i18n.locale = id
    },
    isActiveLang (id) {
      return id === this.$i18n.locale
    }
  }
}
