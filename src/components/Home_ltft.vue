<template>
  <div>
    <div  class="boder select">概念篇</div>
    <ul class="flex column justify-content align-items li">
        <li  class="list-item boder boder-box" v-for="(item,index) in list" :key="index">
            <router-link :class="['link',actives==list[index].index?'active':'black']" @click="changeIndex(index)" :to="'/home/select/'+list[index].index">{{list[index].name}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState('moduleA', ['list', 'actives'])
  },
  components: {

  },
  methods: {
    ...mapMutations('moduleA', ['changeActive']),
    changeIndex (i) {
      this.changeActive(this.list[i].index)
    }

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
