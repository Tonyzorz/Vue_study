import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

const About = () => {
  return import(/* webpackChunkName: "about" */ './views/About.vue')
}

const Users = () => import(/* webpackChunkName: "about" */ './views/Users.vue')
const UsersDetail = () => import(/* webpackChunkName: "about" */ './views/UsersDetail.vue')
const UsersEdit = () => import(/* webpackChunkName: "about" */ './views/UsersEdit.vue')
const TodoList = () => import(/* webpackChunkName: "about" */ './components/TodoList.vue')
const UsersVuex = () => import(/* webpackChunkName: "about" */ './views/UsersVuex.vue')

const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin) {
    //이미 로그인 된 유저임. 로그인 페이지로 가는거 막아야 함
    alert("already logged in")
    next("/")
  } else {
    next()
  }
}

const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin) {
    //이미 로그인 된 유저임. 마이페이지 보기 가능
    next()
  } else {
    next( {name: "login"})
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/users',
      name: 'users',
      beforeEnter: (to, from, next) => {
        console.log('to: ', to, 'from: ', from)
        next()
        /*if(isUserLogin === true) {
          next()

        } else {
          next('/')

        }*/
      },
      component: Users,
      children:[
        {
          path: ':id',
          name: 'users-detail',
          component: UsersDetail,
        },
        {
          path: ':id/edit',
          name: 'users-edit',
          component: UsersEdit,
        },
      ]
    },
    {
      path: '/todoList',
      name: 'todoList',
      component: TodoList
    },
    {
      path: '/usersvuex',
      name: 'UsersVuex',
      component: UsersVuex
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: rejectAuthUser,
      component: () => import(/* webpackChunkName: "about" */ './components/login/Login.vue')
    },
    {
      path: '/mypage',
      name: 'mypage',
      beforeEnter: onlyAuthUser,
      component: () => import(/* webpackChunkName: "about" */ './components/login/MyPage.vue')
    },
    {
      path: '/redirect-me',
      //redirect: '/users'
      redirect: { name: 'users'}
    },
    {
      path: '/*',
      redirect: {name: 'home'}
    },
  ]
})
