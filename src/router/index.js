import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Bookshelf from '../views/bookshelf/Bookshelf.vue'
import Bookstore from '../views/bookstore/Bookstore.vue'
import Find from '../views/find/Find.vue'
import Mine from '../views/mine/Mine.vue'

import ChannelOne from '../views/bookstore/ChannelOne.vue'
import ChannelTwo from '../views/bookstore/ChannelTwo.vue'
import ChannelThree from '../views/bookstore/ChannelThree.vue'

import Voiced from '../views/voiced/Voiced.vue'
import Search from '../views/search/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/bookstore',
    children: [
      {
        path: '/bookstore',
        component: Bookstore,
        redirect: '/bookstore/channelone',
        children: [
          {
            path: 'channelone',
            component: ChannelOne
          },
          {
            path: 'channeltwo',
            component: ChannelTwo
          },
          {
            path: 'channelthree',
            component: ChannelThree
          }
        ]
      }, {
        path: '/bookshelf',
        component: Bookshelf
      }, {
        path: '/find',
        component: Find
      }, {
        path: '/mine',
        component: Mine
      }
    ]
  },
  {
    path: '/voiced',
    component: Voiced
  },
  {
    path: '/search',
    component: Search
  }

]

const router = new VueRouter({
  routes
})

export default router
