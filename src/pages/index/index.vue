<template>
  <div class="index-wrap">
    <comHeader />
    你好，首页
  </div>
</template>

<script>
import header from '@/components/index/header'
import { getUserInfo } from '@/api/index.js'

export default {
  data() {
    return {

    }
  },
  components: {
    comHeader: header
  },
  methods: {
    getInfo(){
      getUserInfo()
      .then(res => {
        // do something
      })
      .catch(response => {})
    }
  },
  created() {
    this.getInfo();
  }
}

</script>

<style scoped lang="less">

</style>
