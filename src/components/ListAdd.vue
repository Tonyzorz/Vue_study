<template>
  <div>투두리스트 추가
    <v-textarea
        outline
        v-model="memo"
        label="todo list input here"
        value=""
    ></v-textarea>
    <v-btn
        @click="listAdd"
    >add list</v-btn>
    <v-btn
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
      index: null
    }
  },
  created() {
    console.log("ListAdd.vue created")
    eventBus.$on('listEdit', (memo, index) => {
      this.memo = memo
      this.index = index
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
        this.$emit("listEdit", this.memo, index)
        this.memo = null
      }
    }
  }
}
</script>

<style scoped>

</style>
