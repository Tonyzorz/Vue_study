import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {// data
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'/img/users/beard_man.png'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'@/src/assets/users/black_woman.png'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'@/src/assets/users/afro_man.png'}
    ]
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
  }
})
