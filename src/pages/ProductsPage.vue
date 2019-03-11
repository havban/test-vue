<template>
  <div>
    <div>
      List of products
    </div>
    <ProductItem
         :item="i"
         v-for="i in products"
         :key="i.sku">
    </ProductItem>
  </div>
</template>

<script type="text/javascript">
import ProductItem from '@/components/products/ProductItem'
import {mapGetters} from 'vuex'
export default {
  name: 'ProductPage',
  components: {
    ProductItem
  },
  computed: {
    ...mapGetters(['products'])
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>
