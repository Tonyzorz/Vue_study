<template>
  <div>
    <v-card
        class="pa-3 mb-3"
        :class="{'done': list.status === 'done'}"
        v-for="(list, index) in todoList"
        :key="index"
    >
      <p>{{ list.memo }}</p>
      <p>{{ list.status }}</p>
      <v-btn
          v-if="list.status === 'created'"
          @click="$emit('statusControl', index, 'done')"
          fab flat small color="green"
      >
        <i class="fas fa-check"/>
      </v-btn>
      <v-btn
          v-else-if="list.status === 'done'"
          @click="$emit('statusControl', index, 'created')"
          fab flat small color="blue"
      >
        <i class="fas fa-redo-alt"/>
      </v-btn>
      <v-btn
          @click="$emit('statusControl', index, 'delete')"
          fab flat small color="red"
      >
        <i class="fas fa-trash-alt"/>
      </v-btn>
      <v-btn
          v-if="list.status === 'created'"
          @click="listEdit(list.memo, index)"
          fab flat small color="purple"
      >
        <i class="fas fa-edit"/>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import {eventBus} from "@/main";

export default {
  name: "List",
  props: ["todoList"],
  created() {
    console.log("List.vue created")
  },
  methods: {
    listEdit(memo, index) {
      eventBus.listEdit(memo, index)
    }
  }
}
</script>

<style scoped>
.done {
  background-color: rgba(0, 0, 0, 0.1);
}
.done p {
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
}

</style>
