<template>
  <v-container fill-height style="max-width:500px">
    <v-layout align-center row wrap>
      <v-flex xs12>
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
              <v-btn large block depressed color="orange">로그인</v-btn>
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
export default {
  name: "Login.vue",
  data() {
    return {
      email: null,
      password: null,
      allUsers: [
        {id: 1, name: 'hoza', email: 'hoza@gmail.com', password: '123456'},
        {id: 2, name: 'hoza2', email: 'hoza2@gmail.com', password: '123456'},
      ],
    }
  },
}
</script>

<style scoped>

</style>
