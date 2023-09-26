<template>
  <div class="home">
    <div class="Home_container">
      <homeLtftVue></homeLtftVue>
      <router-view>

      </router-view>
    </div>
  </div>
</template>

<script>
import HomeLtftVue from '@/components/Home_ltft.vue'
import { mapState } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    HomeLtftVue
  },
  computed: {
    ...mapState('moduleA', ['actives'])
  },
  activated () {
    this.$router.push('/home/select/' + this.actives)
  },
  deactivated () {
  }
}
</script>
<style lang="less" scoped>
.Home_container {
  display: flex;
  padding: 20px;
}
</style>
