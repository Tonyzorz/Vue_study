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
  </div>
 </template>

<script>
export default {
  name: "ListAdd",
  data() {
    return {
      memo: null
    }
  },
  created() {
    console.log("ListAdd.vue created")
  },
  methods: {
    listAdd() {
      console.log("add list")
      console.log(this.memo)
      if (this.memo == null) {
        alert("input is empty")
      } else {
        this.$emit("listAdd", this.memo)
      }
    },
  }
}
</script>

<style scoped>

</style>
