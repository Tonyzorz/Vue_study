<template>
<v-container>
<!--  {{todoList}}-->
  <v-layout row wrap>
    <v-flex xs6 pa-2>
      <List
        v-bind:todoList="todoList"
        @statusControl="statusControl"
      />
    </v-flex>
    <v-flex xs6 pa-2>
      <ListAdd
        @listAdd="listAdd"
        @listEdit="listEdit"
      ></ListAdd>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import List from './List'
import ListAdd from './ListAdd'

export default {
  components: {List, ListAdd},
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    listAdd(memo) {
      console.log("받았어!")
      this.todoList.push({ memo: memo, status: "created" })
    },
    statusControl(index, status) {
      if (status === 'delete') {
        this.todoList.splice(index, 1);
        return
      }
      this.todoList[index].status = status;
    },
    listEdit(memo, index) {

    }
  }
}
</script>
