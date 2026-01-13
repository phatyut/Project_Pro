<template>
  <div class="border-0 m-0 box-border relative">
       <div>
          <Mainpage/>
       </div>


       <div>
          <router-view></router-view>
      </div>
  </div>
</template>
<script>
  import Mainpage from './components/mainpage/Mainpage.vue';



  export default{
    components:{
      Mainpage,
    },
    data(){
      return {

      }
    }
  }
</script>