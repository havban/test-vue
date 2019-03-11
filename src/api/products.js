import axios from 'axios'

export default {
  getProducts () {
    return axios.get('/api/products')
  },
  getProductById (id) {
    return axios.get('/api/products/' + id)
  }
}
