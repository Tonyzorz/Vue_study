import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {// data
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'/img/users/beard_man.png'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'@/src/assets/users/black_woman.png'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'@/src/assets/users/afro_man.png'}
    ],
    login_allUsers: [
      {id: 1, name: 'hoza', email: 'hoza@gmail.com', password: '123456'},
      {id: 2, name: 'hoza2', email: 'hoza2@gmail.com', password: '123456'},
    ],
    isLogin: false,
    isLoginError: false,
    userInfo: null,
  },
  getters: { //computed
    // allUsersCount: function(state) {
    //   return state.allUsers.length
    // }
    allUsersCount: state => {
      return state.allUsers.length
    },
    countOfSeoul: state => {
      let count = 0;
      state.allUsers.forEach(user => {
        if (user.address === 'Seoul') count++;
      })
      return count;
    },
    percentOfSeoul: (state, getters) => {
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100)
    },
  },
  mutations: {
    addUsers: (state, payload) => {
      state.allUsers.push(payload)
    },

    //로그인이 성공했을 때,
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    //로그인이 실패했을 때,
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    logout(state) {
      state.isLogin = false;
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    }
  },
  actions: {
    addUsers: ({ commit }, payload) => {
      //비동기 로직 여기에 추가



      //마지막에 mutation에 commit해주기
      commit('addUsers', payload)
    },
    // commit를 할때마다 context.를 안붙이기 위해 위와 같이 사용.
    // addUsers: (context) => {
    //   context.commit('addUsers')
    // },



    // 로그인 시도
    login({ state, commit }, payload) {

      console.log(payload)

      //1. 전체 유저에서 해당 이메일로 유저를 찾는다.
      let selectedUser = null

      state.login_allUsers.forEach(user => {
        if (user.email === payload.email) {
          selectedUser = user
        }
      })

      //2. 그 유저의 비밀번호와 입련된 비밀번호를 비교한다.
      if (selectedUser === null || selectedUser.password !== payload.password) {
        commit("loginError")
      } else {
        commit("loginSuccess", selectedUser)
        console.log("state.userinfo" + state.userInfo)
        router.push({ name : "mypage"})
      }

      console.log(this.email, this.password)
    },
    logout({commit}) {
      commit('logout')
      router.push({name: "home"})
    }
  }
})
