<template>
  <van-tabbar v-model="active"  active-color="#07c160" inactive-color="#000">
  <van-tabbar-item icon="home-o" to='/'>外卖</van-tabbar-item>
  <van-tabbar-item icon="search" to='/search'>搜索</van-tabbar-item>
  <van-tabbar-item icon="logistics" to='/order'>订单</van-tabbar-item>
  <van-tabbar-item icon="contact" to='/profile'>我的</van-tabbar-item>
</van-tabbar>
</template>

<script>
export default {
data() {
    return {
      active: 0,
    };
  },
  mounted () {
   switch (this.$route.path) {
         case '/search':
            this.active = 1;
            
            break;
        case '/order':
            this.active = 2;
            
            break;
            case '/profile':
            this.active = 3;
            
            break;
    
        default:
            this.active = 0;
            break;
    }
  }
}
</script>

<style>

</style>