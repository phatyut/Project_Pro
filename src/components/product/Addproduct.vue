<template>
    <div class="  rounded-[5px]  backdrop-opacity-1 w-62  h-90  overflow-hidden bg-white *:text-black">
        <div class=" bg-white rounded-[5px] flex justify-center items-center w-full h-40">
            <img :src="urltoproductpage" alt="" class=" object-cover " :style="{width:setwidthI + 'px', height:setheightI + 'px'}">
        </div>
        
        <div class=" relative flex justify-center items-center">
            <div class="flex w-[90%] justify-between">

                <div class="text-[17px] font-semibold text-green-500">{{ name }}</div>
                <!-- <div>{{ evaluation }}</div> -->
                <div>
                    <font-awesome-icon icon="fa-solid fa-star"  class="text-[13px] text-green-500"/>
                    <font-awesome-icon icon="fa-regular fa-star"  class=" font-serif  text-[13px] text-gray-500"  />
                </div>
            </div>
        </div>
        <div class=" h-30 indent-5 overflow-hidden text-[13px]  ">{{ description }}</div>
        <div class="flex absolute bottom-4  w-full justify-center items-center  ">
            <div class="flex relative justify-between w-[95%] items-center">
                <div class="text-green-600">{{ price }} $</div>
                <div class="flex justify-center items-center">
                    <button class="text-[13px] bg-green-700 px-2 py-0.5 rounded-sm text-white">Buy now</button>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
    export default{

        props:{
            urltoproductpage:{
                       
            },
            name:      { 
                            type: String,
                            require:true 
                        },
            evaluation:{
                            type:Number,
                            require:true
                        }, 
             description:{
                            type:String,
                            require:true
                        }, 
             price:{
                            type:Number,
                            require:true
                        },  
            setwidthI:  {
                            type:Number,    
                            default:150

                        } ,       
            setheightI:  {
                            type:Number,
                            default:150
                        } ,       
        },
               
                

                             
        
       

        data(){
            return {
                
            }
        }
    }

</script>