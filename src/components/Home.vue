<template>
  <v-container>
    <!--  {{todoList}}-->
    <v-layout row wrap>
      <v-flex xs12 text-xs-center>
        <h1>투두 리스트</h1>
        <p>전체 할일: {{ this.todoList.length }}/ 완료된 할일: {{ this.countDone }}/ 남은 할일:
          {{ this.todoList.length - this.countDone }}</p>
      </v-flex>
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
  computed: {
    countDone() {
      let count = 0;
      this.todoList.forEach(list => {
        if (list.status == 'done') count++;
      })
      return count;
    }
  },
  methods: {
    listAdd(memo) {
      console.log("받았어!")
      this.todoList.push({memo: memo, status: "created"})
    },
    statusControl(index, status) {
      if (status === 'delete') {
        this.todoList.splice(index, 1);
        return
      }
      this.todoList[index].status = status;
    },
    listEdit(memo, index) {
      this.todoList[index].memo = memo;
    }
  }
}
</script>
