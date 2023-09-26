<template>
  <div class="about">
    <h1>This is an about page{{num}}</h1>
    <hello v-model:num="num"></hello>
  </div>
</template>
<script>
import hello from '@/components/HelloWorld.vue'
export default {
  data () {
    return {
      num: 1
    }
  },
  components: {
    hello
  }
}
</script>
