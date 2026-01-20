<template>
    <div>
        <div class="">
            <div class="w-full h-30  flex items-center justify-center  ">
                <div class="pl-5 w-[90%] ">
                    <img src="../../../public/images/ktalogo.png" alt="ktalogo" class="w-40 left-10">
                </div>
            </div>
            <div class=" sticky top-0">
                <div class="relative bg-linear-to-b from-[#A64451] to-[#B66271] w-full h-15 flex items-center justify-center">
                    <div class="h-full w-[90%] flex items-center space-x-2 ">
                        <Menu></Menu>
                    </div>
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