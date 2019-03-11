<template>
  <div>
    Product edit {{id}}<br/>
    SKU: <input type="text"
      v-model="product.sku"/>
    <br/>
    name: <input type="text"
      v-model="product.name"/>
    <br/>
    image: <input type="text"
      v-model="product.image"/>
    <br/>
    <pre>
    {{newSku}}
    </pre>
    <br/>
    <button @click="save">Save</button>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'ProductDetailPage',
  data () {
    return {
      product: {
        sku: '',
        name: '',
        image: ''
      },
      newSku: ''
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    isNew () {
      return this.$route.query.newProduct === 'true'
    },
    ...mapGetters([
      'productDetail'
    ])
  },
  methods: {
    save () {
      alert('data saved ' + JSON.stringify(this.product))
    }
  },
  created () {
    this.$store.dispatch(
      'getProductDetail',
      {
        id: this.id
      }
    )
  },
  watch: {
    'product.sku': function (v, oldValue) {
      this.newSku = 'old: ' + oldValue + '\n' + 'new: ' + v
    },
    productDetail (v) {
      this.product = {...v}
    }
  }
}
</script>
<style scoped>
.new {
  color: red;
  font-weight: bold;
}
</style>
