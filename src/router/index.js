import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Howitwork from '../views/Howitwork.vue'
import Login from '../views/credentials/login.vue'
import Signin from '../views/credentials/signin.vue'
import AccountView from '../views/AccountView.vue'
import Fundraiser from '../views/Fundraiser.vue'
import MyFundraiser from '../views/MyFundraiser.vue'
import Details from '../views/DetailsFundraiser.vue'
import AllFundraiser from '../views/AllFundraiser.vue'
import Donate from '../views/PayingView'

const routes = [
  { path: '/',name: 'home',component: HomeView},
  { path: '/howitwork',name: 'howitwork',component: Howitwork},
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { path: '/signin',name: 'login',component: Login},
  { path: '/signup',name: 'signin',component: Signin},
  { path: '/account',name: 'accountview',component: AccountView},
  { path: '/newfund',name: 'Fundraiser',component: Fundraiser},
  { path: '/myfund',name: 'MyFundraiser',component: MyFundraiser},
  { path: '/details',name: 'Details',component: Details},
  { path: '/allfund',name: 'AllFundraiser',component: AllFundraiser},
  { path: '/donate',name: 'donate',component: Donate},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
