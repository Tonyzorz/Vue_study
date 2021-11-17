<template>
  <div>
    <h1>{{ userInfo }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "MyPage.vue",
  computed: {
    ...mapState(["userInfo"]),
  },
}
</script>

<style scoped>

</style>
