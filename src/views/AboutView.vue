<template>
  <div class="about">
    <div style="display: flex;padding:20px">
      <hello></hello>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import hello from '../components/HelloWorld.vue'
import { mapState } from 'vuex'
export default {
  components: {
    hello
  },
  computed: {
    ...mapState('moduleB', ['actives'])
  },
  activated () {
    this.$router.push('/about/about/' + this.actives)
  },
  deactivated () {
  }
}
</script>
<style lang="less" scoped>

</style>
