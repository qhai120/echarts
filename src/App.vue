<template>
  <nav>
    <router-link to="/home" class="link" @click="Component='about'">基础</router-link> |
    <router-link to="/about" class="link" @click="Component='HomeView'">进阶</router-link>
  </nav>
  <router-view v-slot='{Component}'>
    <keep-alive>
      <component :is='Component'></component>
    </keep-alive>
  </router-view>

</template>

<script>
import HomeView from './views/HomeView.vue'
import about from './views/AboutView.vue'
export default {
  data () {
    return {
      Component: 'HomeView'
    }
  },
  components: {
    HomeView, about
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

}

</style>
