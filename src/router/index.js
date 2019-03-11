import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactUsPage from '@/pages/ContactUsPage'
import ProductsPage from '@/pages/ProductsPage'
import ProductDetailPage from '@/pages/products/ProductDetailPage'
import ProductEditPage from '@/pages/products/ProductEditPage'
import CategoriesPage from '@/pages/CategoriesPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUsPage
    },
    {
      path: '/products',
      name: 'ProductsPage',
      component: ProductsPage
    },
    {
      path: '/products/:id',
      name: 'ProductDetailPage',
      component: ProductDetailPage
    },
    {
      path: '/products/:id/edit',
      name: 'ProductEditPage',
      component: ProductEditPage
    },
    {
      path: '/categories',
      name: 'CategoriesPage',
      component: CategoriesPage
    }
  ],
  mode: 'history'
})
