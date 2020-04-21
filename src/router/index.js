import Vue from 'vue'
import VueRouter from 'vue-router'
import ROUTE_CONSTANTS from '@/constants/route'
import Index from "@/pages/Index";
import Order from "@/components/Order";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import Callback from "@/pages/Callback";
import Menu from "@/components/Menu";
import ActiveOrders from "@/components/ActiveOrders";

Vue.use(VueRouter)

const routes = [
  {
    path: ROUTE_CONSTANTS.HOME_ROUTE.path,
    component: Index,
    props: {},
    meta: {
      title: ROUTE_CONSTANTS.HOME_ROUTE.title
    },
    children: [
      {
        path: ROUTE_CONSTANTS.DASHBOARD_ROUTE.path,
        name: ROUTE_CONSTANTS.DASHBOARD_ROUTE.name,
        component: Order,
        props: {},
        meta: {
          title: ROUTE_CONSTANTS.DASHBOARD_ROUTE.title
        }
      },
      {
        path: ROUTE_CONSTANTS.MENU_ROUTE.path,
        name: ROUTE_CONSTANTS.MENU_ROUTE.name,
        component: Menu,
        props: {},
        meta: {
          title: ROUTE_CONSTANTS.MENU_ROUTE.title
        }
      },
      {
        path: '/orders',
        name: 'Historical Orders',
        component: Order,
        props: {},
        meta: {
          title: 'Historical Orders'
        }
      },
      {
        path: '/activeOrders',
        name: 'Active Orders',
        component: ActiveOrders,
        props: {},
        meta: {
          title: 'Active Orders'
        }
      },
      {
        path: "/profile",
        name: "profile",
        component: Profile
      }
    ]
  },
  {
    path: ROUTE_CONSTANTS.LOGIN_ROUTE.path,
    name: ROUTE_CONSTANTS.LOGIN_ROUTE.name,
    component: Login,
    props: {},
    meta: {
      title: ROUTE_CONSTANTS.LOGIN_ROUTE.title
    }
  },
  {
    path: '/callback',
    name: 'callback',
    component: Callback
  },
  {
    path: '*',
    redirect: '/'
  },
]
/**
 * @param {object} param0 | takes routes meta object
 * Sets page title using the title property of each route
 */
const setPageTitle = ({ meta }) => {
  const title = meta.title ? meta.title : 'Home'
  document.title = title
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  setPageTitle(to)
  if(to.name === 'callback') {
    console.log('going to callback ')
    next()
  } else if(to.name === 'Login') {
    console.log('going to Login ')
    next()
  } else if (router.app.$auth.isAuthenticated()) {
    next()
  } else {
    next('/login')
  }
})

export default router
