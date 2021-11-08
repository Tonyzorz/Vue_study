<template>
  <div>투두리스트 추가
    <v-textarea
        outline
        v-model="memo"
        label="todo list input here"
        value=""
    ></v-textarea>
    <v-btn v-if="mode === 'add'"
        @click="listAdd"
    >add list</v-btn>
    <v-btn v-else
        @click="listEdit"
    >edit list</v-btn>
  </div>
 </template>

<script>
import {eventBus} from "@/main";

export default {
  name: "ListAdd",
  data() {
    return {
      memo: null,
      index: null,
      mode: "add"
    }
  },
  created() {
    console.log("ListAdd.vue created")
    eventBus.$on('listEdit', (memo, index) => {
      this.memo = memo
      this.index = index
      this.mode = "edit"
      console.log(memo, index)
    })
  },
  methods: {
    listAdd() {
      if (this.memo == null) {
        alert("input is empty")
      } else {
        this.$emit("listAdd", this.memo)
        this.memo = null
      }
    },
    listEdit() {
      if (this.memo == null) {
        alert("input is empty")
      } else {
        this.$emit("listEdit", this.memo, this.index)
        this.memo = null
        this.mode = "add"
      }
    }
  }
}
</script>

<style scoped>

</style>
