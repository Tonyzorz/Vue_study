<template>
  <div>
    유저번호 :
    {{userId}}
    <v-btn @click="edit" small>수정</v-btn>
  </div>
</template>

<script>
export default {
  name: "UsersDetail",
  data() {
    return {
      id: 'test'
    }
  },
  computed: {
    userId() {
      console.log('Entered userdetail vue ')
      this.id = this.$route.params.id
      return this.id
    },
  },
  methods: {
    edit() {
      //this.$router.push({name: 'users-edit'})
      this.$router.push({path: `${this.userId}/edit`})
    },
  }
}
</script>

<style scoped>

</style>
