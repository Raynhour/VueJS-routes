var Vue = require('vue')
import VueRouter from 'vue-router'

var Brands = require('./views/Brands.vue')
var Contacts = require('./views/Contacts.vue')
var Projects = require('./views/Projects.vue')
var Blog = require('./views/Blog.vue')
var Post = require('./views/Post.vue')
const firstPage = require('./views/firstpage.vue')

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/brands', component: Brands },
    { path: '/contacts', component: Contacts },
    { path: '/projects', component: Projects },
    { path: '/blog', component: Blog },
    { path: '/post/:id', name: 'post', component: Post },
    { path: '/firstpage', name: 'post', component: firstPage }
  ]
})

new Vue({
  el: '#app',
  router: router
})
