<template>
  <div class="home">
    <!-- <HeaderTop title="西南交通大学（9号楼）"></HeaderTop> -->
    <!-- 导航组件 -->
    <van-nav-bar
    class="navbar"
  title="西南交通大学（9号楼）"
  left-text="返回"
  right-text="登录|注册"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
 <!-- 轮播图 -->
 <div class="swiper">
   <img src="./images/msite_back.svg">

 </div>
 <!-- 附近商家 -->
 <div class="close">
   <p class="close_shop">|| 附近商家</p>
   <!-- <ShopList /> -->

 </div>



    <FooterGuide/>
  </div>
  
</template>

<script>
import FooterGuide from '@/components/footerGuide/FooterGuide'
import HeaderTop from '../../components/HeaderTop/HeaderTop'  
// import ShopList from '../../components/ShopList/ShopList.vue'
export default {
    components: {
        FooterGuide, 
        HeaderTop,
        
    },
    data () {
      return {
        
      }
    },
    methods: {
      onClickLeft(){
        this.$router.push(-1)
      },
      onClickRight(){
        console.log(1);
        
      }
      
    }

}
</script>

<style>
 .navbar{
   background-color: #02a774;
   
 }
 .van-nav-bar__text {
    color: white;
}
.van-icon-arrow-left::before {
     color: white;
}
.van-nav-bar__text {
    color: white;
}

  .close_shop{
  padding: 5px 0;
  
  font-size: 10px;
  
  border: 1px solid black
  }


</style>
