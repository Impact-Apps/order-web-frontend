import Vue from 'vue'
import VueRouter from 'vue-router'
import ROUTE_CONSTANTS from '@/constants/route'
import HelloWorld from "@/components/HelloWorld";

Vue.use(VueRouter)

const routes = [
  {
    path: ROUTE_CONSTANTS.SAMPLE_ROUTE.path,
    name: ROUTE_CONSTANTS.SAMPLE_ROUTE.name,
    component: HelloWorld,
    props: {},
    meta: {
      title: ROUTE_CONSTANTS.SAMPLE_ROUTE.title
    }
  }
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
  next()
})

export default router
