<template>
<div class="flex justify-between w-full">
    <div class="flex items-center space-x-1.5"> 
     
            <router-link to="/home">
                <div class="flex items-center justify-center space-x-1 px-2 py-0.5 border-b-2  bg-white hover:bg-gray-200  ">
                    <div class="flex justify-center items-center">
                        <font-awesome-icon :icon="['fas', 'house-chimney']" class="text-[#A64451] text-[13px]" />

                    </div>
                    <div class="flex justify-center items-center">
                        <button class=" font-bold text-[12px] text-[#A64451] text-shadow-love text-shadow-white hover:text-black ">Home</button>
                    </div>
                </div>
            </router-link>


            <router-link to="/product">
                <div class="flex items-center justify-center space-x-1 px-2 py-0.5 border-b-2  bg-white hover:bg-gray-200  ">
                    <div class="flex justify-center items-center">
                       <font-awesome-icon icon="fa-solid fa-cart-shopping" class="text-[#A64451] text-[13px]" />
                    </div>
                    <div class="flex justify-center items-center">
                        <button class=" font-bold text-[12px] text-[#A64451] text-shadow-love text-shadow-white hover:text-black ">Product</button>
                    </div>
                </div>
            </router-link>
           
           
            <router-link to="/newproduct">
                <div class=" relative flex items-center justify-center space-x-1 px-2 py-0.5 border-b-2  bg-white hover:bg-gray-200  ">
                    <div class="flex justify-center items-center">
                       <font-awesome-icon :icon="['fas', 'file-pen']" class="text-[#A64451] text-[13px]" />
                    </div>
                    <div class="flex justify-center items-center">
                        <button class=" font-bold text-[12px] text-[#A64451] text-shadow-love text-shadow-white hover:text-black ">New Product</button>
                    </div>
                    <div class=" absolute flex justify-center items-center -top-2 rounded-full -right-1 font-serif bg-green-700 w-auto h-3.25 px-1  text-[13px]">
                        <span class="text-white">{{ number_newproduct }}</span>
                    </div>
                </div>
            </router-link>


            <router-link to="/service">
                <div class=" relative flex items-center justify-center space-x-1 px-2 py-0.5 border-b-2  bg-white hover:bg-gray-200  ">
                    <div class="flex justify-center items-center">
                        <font-awesome-icon icon="fa-solid fa-gear" class="text-[#A64451] text-[13px]" />
                    </div>
                    <div class="flex justify-center items-center">
                        <button class=" font-bold text-[12px] text-[#A64451] text-shadow-love text-shadow-white hover:text-black ">Service</button>
                    </div>
                    
                </div>
            </router-link>
     
    </div>

    <div class="flex justify-center items-center">
        <searchbar/>
    </div>

    <div class="flex justify-center items-center space-x-2">
        <router-link to="/signup">
            <div class="flex justify-center items-center px-1.5 rounded-full">
                <button class=" font-semibold text-[13px] p-1 underline">Sign Up</button>
            </div>
        </router-link>

        <router-link to="/login">
            <div class="flex justify-center items-center bg-white px-1.5 rounded-full">
                <button class=" font-semibold text-[13px] p-1 ">Log In</button>
            </div>
        </router-link>
      
    </div>
    
</div>
</template>
<script>
import Searchbar from '../../searchbar/Searchbar.vue';

export default{
    components:{Searchbar},
    data(){
        return {
            number_newproduct: 100,
        }
    }
}

</script>
