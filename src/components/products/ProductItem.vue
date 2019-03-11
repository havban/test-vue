<template>
  <div>
    SKU: {{item.sku}}<br/>
    name: {{item.name}}<br/>
    <img width="100px" :src="item.image"/>
    <router-link
      :to="'/products/' + item.id">
      detail
    </router-link>
    <router-link
      tag="button"
      :to="'/products/' + item.id + '/edit'">
      edit
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'ProductItem',
  props: [
    'item'
  ]
}
</script>
