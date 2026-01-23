<template>
    <!-- bg-linear-to-t to-[#A54B57] from-[#A54B57] -->
    <div class="   fixed bg-gray-600  h-full top-0 left-0 w-full  scroll-smooth overflow-x-hidden " @click="clickproduct" >
       
       
       
       
        <div class="z-20  fixed w-full   top-0  h-auto flex justify-center items-center bg-black py-2.5 border  ">
            <div class="flex justify-between items-center relative w-full ">
                <div class="text-white">Go back to home page</div>


                <div class="relative w-85 h-auto flex   px-.5  ">
                    <div class=" flex justifu-center items-center relative h-12 bg-gray-600 rounded-l-[5px]">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-gray-300 text-[20px]  px-4  " />
                    </div>
                    <div><input type="text" class=" inset-shadow-search outline-none flex  text-black font-semibold text-[13px] w-96.5 h-12 rounded-r-[5px] bg-gray-400 px-1.5 "></div>
                </div>


                <div class="text-white">check another</div>
            </div>
        </div>
        <div class="relative h-12 w-full"></div>




        <div class="relative h-12 w-full ">1</div>
      
        <div class="relative h-auto w-full text-white ">
                <div class="sticky top-17 z-10  ">
                    <div class="bg-gray-500 table text-black px-4 py-1 uppercase rounded-r-full">Computer</div>
                </div>
                
                <div class="flex w-[95%] flex-nowrap space-x-5.5 p-10">
                                    <Addproduct 
                                            v-for="Eproduct in itemsproduct "
                                            :key="Eproduct.name"
                                            :name="Eproduct.name"
                                            :urltoproductpage="Eproduct.url"
                                            :evaluation="Eproduct.evaluation"
                                            :description="Eproduct.description"
                                            :price=" Eproduct.price" 
                                            :setheightI="Eproduct.setheightI"  
                                            :setwidthI="Eproduct.setwidthI"                    
                                            >
                                    </Addproduct>
            </div>


            <!-- <div class=" flex w-[95%] flex-nowrap space-x-5.5 p-10">
                <Testproduct></Testproduct>
            </div> -->


               
                <div class="relative h-96 w-full ">1</div>
                <div class="relative h-96 w-full text-white">1</div>
                <div><img src="../../../public/images/networksharer.png" alt=""></div>
        </div>
        <div class="relative  w-full text-white ">
                <div class="sticky top-10 z-10 bg-green-500">network</div>
                <div class="relative h-96 w-full ">1</div>            
                <div class="relative h-96 w-full ">1</div>
                <div class="relative h-96 w-full text-white">1</div>
        </div>
        
        
    </div>
</template>

<script>   
//  _________import page___________
import Addproduct from './Addproduct.vue';
import Testproduct from './Testproduct.vue';
//  _________import images___________
import dc from "../../../public/images/dc.png"
import pc from "../../../public/images/computer.png"
    export default{
        components:{
                        Addproduct,
                        Testproduct
                   },
        props:["clickproduct"],


        data(){
            return {
                itemsproduct:[
                    {name:'Projector',evaluation:3,url:dc ,description:"love you", price:12 ,setwidthI:100 ,setheightI:100},
                    {name:'Projector',evaluation:3,url:pc ,description:"love you", price:12},
                    {name:'Projector',evaluation:3,url:dc ,description:"love you", price:12},
                    {name:'Projector',evaluation:3,url:dc ,description:"love you", price:12},
                    {name:'Projector',evaluation:3,url:pc ,description:"love you", price:12},
 
                ],

               showproduct:true,
            }
        },methods:{
            // clickproduct(){
            //     alert("I love you.")
            // }
        }
    }
</script>