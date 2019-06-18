import Vue from 'vue'
import Router from 'vue-router'
import movieRoter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRoter,
    mineRouter,
    cinemaRouter,
    {
      path : '/*',
      redirect : '/movie'
    }
  ]
})
