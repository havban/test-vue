<template>
  <div>
    Product detail {{id}}
    <span v-if="isNew"
      class="new">
      NEW!!!
    </span><br/>
    SKU: {{productDetail.sku}}<br/>
    name: {{productDetail.name}}<br/>
    <img width="100px" :src="productDetail.image"/>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'ProductDetailPage',
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
  created () {
    this.$store.dispatch(
      'getProductDetail',
      {
        id: this.id
      }
    )
  }
}
</script>
<style scoped>
.new {
  color: red;
  font-weight: bold;
}
</style>
