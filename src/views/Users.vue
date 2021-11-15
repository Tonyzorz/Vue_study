<template>
<!--    <p>이 유저는 현재 유저 번호가 {{ userId}} 입니다</p>
    <h1>group : {{ $route.params.name }}</h1>
    <h1>category: {{ $route.query }}</h1>
    <h1>name: {{ $route.quey.name }}</h1>
    <h1>address: {{ $route.query.address }}</h1>-->
  <v-layout row wrap pt-5 text-xs-center>
    <v-flex xs12>
      <h1>Users</h1>
      <p>유저를 검색해주세요</p>
    </v-flex>
    <v-flex xs12>
      <v-text-field
          label="enter user id"
          v-model="userId"
      >
      </v-text-field>
<!--      <v-btn @click="$router.push({path: `users/${userId}`})">검색</v-btn>-->
      <v-btn @click="$router.push({
        name: 'users-detail',
        params: {
          id:userId
        }
      })">검색</v-btn>
    </v-flex>
    <v-flex>
      <router-view></router-view>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      userId: null
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('before Enter')
    next()
  },
  beforeRouteLeave(to, from, next){
    console.log("before leaving route")
    next()
  },
  computed: {
    /*userId() {
      return this.$route.params.userId
    }*/
  },
  created() {
    console.log('router', this.$router)
    console.log('route', this.$route)
  },
  destroyed() {
    console.log("Destroyed....")
  }
}
</script>

<style scoped>

</style>
