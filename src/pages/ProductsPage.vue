<template>
  <div>
    <div>
      List of products
    </div>
    <div v-for="i in items"
         :key="i.sku">
      <div>
        SKU: {{i.sku}}<br/>
        name: {{i.name}}<br/>
        <img width="100px" :src="i.image"/>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'ProductPage',
  data () {
    return {
      items: []
    }
  },
  created () {
    axios.get('/api/products').then((resp) => {
      this.items = resp.data.data
    })
  }
}
</script>
