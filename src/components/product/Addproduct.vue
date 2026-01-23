<template>
    <div class="border border-gray-800 rounded-[5px] p-1 w-50 h-80 bg-gray-700 shrink-0 shadow-sm shadow-gray-400">
        <div class="inset-shadow-test bg-white rounded-[5px] flex justify-center items-center w-full h-40">
            <img :src="urltoproductpage" alt="" class=" object-cover " :style="{width:setwidthI + 'px', height:setheightI + 'px'}">
        </div>
        
        <div class="flex justify-between pt-1.5">
            <div class="text-[13px]">{{ name }}</div>
            <!-- <div>{{ evaluation }}</div> -->
             <div>
                 <font-awesome-icon icon="fa-solid fa-star"  class="text-[13px] text-green-500"/>
              <font-awesome-icon icon="fa-regular fa-star"  class=" font-serif  text-[13px] text-gray-500"  />
             </div>
        </div>
        <div class=" h-30 indent-5">{{ description }}</div>
        <div class="flex justify-between  ">
            <div class="text-green-600">{{ price }} $</div>
            <div class="flex justify-center items-center">
                <button class="text-[13px] bg-gray-700 px-2 py-0.5 rounded-[4px] text-white">Buy now</button>
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