<template>
  <div class="border-0 m-0 box-border relative overflow-hidden">
       <div>
          <Mainpage/>
       </div>



<!--    these lines for test only vue -->

       <router-link to="/testvue">
              <div class="absolute right-0 top-0 bg-green-500 px-2.5 py-1.5 rounded-md ">
                <div>
                  <button>Only Test vue</button>
                  </div>
                </div>       
        </router-link>






       <div class=" ">
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