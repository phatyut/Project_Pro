<template>
    <div>
        <div class="">
            <div class="w-full h-28  flex items-center justify-center  ">
                <div class="pl-5 w-[90%] ">
                    <img src="../../../public/images/ktalogo.png" alt="ktalogo" class="w-30 left-10">
                </div>
            </div>

            <div class="relative bg-linear-to-b from-[#A64451] to-[#B66271] w-full h-10 flex items-center justify-center">
                <div class="h-full w-[90%] flex items-center space-x-2 ">
                    <Menu/>
                </div>
            </div>

        </div>
    </div>

</template>
<script>
import Menu from './menu/Menu.vue'; 

export default{
    components:{Menu},
    data(){
        return{

        }
    }   
}

</script>