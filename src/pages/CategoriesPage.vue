<template>
  <div>
    <div>
      List of Categories
      <ul>
        <li v-for="i in items"
            :key="i.id">
          {{i.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'CategoriesPage',
  data () {
    return {
      items: []
    }
  },
  created () {
    axios.get('/api/categories').then((resp) => {
      this.items = resp.data.data
    })
  }
}
</script>
