<template>
  <div>
    <div  class="boder select">进阶篇</div>
    <ul class="flex column justify-content align-items li">
        <li  class="list-item boder boder-box" v-for="(item,index) in list" :key="index">
            <router-link :class="['link',actives==list[index].index?'active':'black']" @click="changeIndex(index)" :to="'/about/about/'+list[index].index">{{list[index].name}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    page: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState('moduleB', ['list', 'actives'])
  },
  components: {

  },
  methods: {
    ...mapMutations('moduleB', ['changeActive']),
    changeIndex (i) {
      this.changeActive(this.list[i].index)
    }

  },
  created () {
  }
}
</script>

<style lang="less" scoped>
.select{
    height: 50px;
    line-height: 50px;
}
.list-item{
    width: 250px;
    height: 70px;
    line-height: 70px;
}
</style>
