<template>
  <nav>
    <router-link to="/home">基础</router-link> |
    <router-link to="/about">进阶</router-link>
  </nav>
  <router-view v-slot='{Component}'>
    <keep-alive>
      <component :is='Component'></component>
    </keep-alive>
  </router-view>

</template>

<script>
import HomeView from './views/HomeView.vue'
export default {
  data () {
    return {
      Component: 'HomeView'
    }
  },
  components: {
    HomeView
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

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
