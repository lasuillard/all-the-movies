import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home'
import Movies from '../components/Movies'
import MovieInfo from '../components/MovieInfo'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: 'movies/',
      name: 'movies',
      component: Movies
    },
    {
      path: 'movies/:id',
      name: 'movie-info',
      component: MovieInfo
    }
  ]
})
