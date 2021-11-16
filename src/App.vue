<template>
  <v-container class="grey lighten-4" fluid>
    <v-app id="inspire">
      <v-navigation-drawer
          v-model="drawer"
          fixed
          app
      >
        <v-list dense>
<!--          <v-list-tile @click="$router.push({name: 'home'})">-->
          <v-list-tile router :to="{name: 'home'}" exact>
            <v-list-tile-action>
              <i class="fas fa-home"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
<!--          <v-list-tile @click="$router.push({path: '/about'})">-->
          <v-list-tile router :to="{name: 'ogin'}" exact>
            <v-list-tile-action>
              <i class="fas fa-child"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Login</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile router :to="{path: '/about'}" exact>
            <v-list-tile-action>
              <i class="fas fa-fish"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>About</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
<!--          <v-list-tile router :to="{
            name: 'users',
            params: {
              userId: 4321,
              name: 'hoza'
            },
            query: {
              group: 'member',
              category: 'trial',
            },
            }" exact
          >-->
          <v-list-tile router :to="{name: 'users'}" exact>
            <v-list-tile-action>
              <i class="fas fa-tree"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Users</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile router :to="{path: '/todoList'}" exact>
            <v-list-tile-action>
              <i class="fas fa-dove"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>리스트(No vuex)</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile router :to="{path: '/usersvuex'}" exact>
            <v-list-tile-action>
              <i class="fas fa-tooth"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>유저들(vuex)</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <router-view></router-view>
      </v-content>

      <v-footer color="indigo" app>
        <span class="white--text">&copy; 2017</span>
      </v-footer>
    </v-app>
<!--
    <v-layout row wrap>
      <v-flex xs12>
        <Home/>
      </v-flex>
    </v-layout>
-->

  </v-container>
</template>

<script>
//import Home from "./components/TodoList.vue"

export default {
  components: {
   //Home
  },
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  methods : {
    test() {
      alert("click")
    },
  }
}
</script>
