<template>
  <v-container fill-height style="max-width:500px">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert
          :value="isLoginError"
          type="error"
        >
          Check your email or/and password
        </v-alert>
        <v-alert
            :value="isLogin"
            type="success"
        >
          Check your email or/and password
        </v-alert>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field
                v-model="email"
                label="Email"
            ></v-text-field>
            <v-text-field
                v-model="password"
                type="password"
                label="Password"
            ></v-text-field>
            <div>
              <v-btn large block depressed color="orange"
              @click="login({
                email: email,
                password: password
              })">로그인</v-btn>
              <v-btn large block depressed color="lime">회원가입</v-btn>
              <v-btn large block depressed color="cyan">패스워드 찾기</v-btn>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: "Login.vue",
  data() {
    return {
      email: null,
      password: null,
    }
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"])
  },
  methods: {
    ...mapActions(["login"]),
    /*    login() {
        //1. 전체 유저에서 해당 이메일로 유저를 찾는다.
         let selectedUser = null

         this.allUsers.forEach(user => {
           if (user.email === this.email) {
             selectedUser = user
           }
         })

         //2. 그 유저의 비밀번호와 입련된 비밀번호를 비교한다.
         if (selectedUser === null) {
           this.isError = true
         } else {
           selectedUser.password !== this.password ? this.isError = true : this.loginSuccess = true
         }

         console.log(this.email, this.password)
    },*/

  }
}
</script>

<style scoped>

</style>
