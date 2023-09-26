<template>
  <div>
    {{num}}
    <button @click="add">加一</button>
  </div>
</template>

<script>
export default {
  emits: ['update:num'],
  props: {
    num: {
      type: Number
    }
  },
  methods: {
    add () {
      this.$emit('update:num', this.num + 1)
    }
  }

}
</script>

<style>

</style>
