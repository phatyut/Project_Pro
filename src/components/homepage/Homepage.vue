<template>
    <div class="">
        <div class="relative w-full h-auto border-gray-600 mt-10 flex flex-col justify-center items-center "> 
            <div class=" flex flex-col relative w-full h-37.5 bg-linear-to-t to-[#A54B57] from-[#A54B57] justify-center items-center">
                <div class="w-full h-[90%]  px-[1%] flex flex-col   ">
                    <div class="flex space-x-10 overflow-hidden">
                        <Elementhome 
                            v-for="image in itemimages"
                            :key="image" 
                            :imagehomepage="image.srcimage">
                        </Elementhome>
                    </div>
                </div>
            </div>


            <div class=" flex w-full  ">
                <Showmainproduct></Showmainproduct>
            </div>



            <div class=" bg-linear-to-t to-[#A54B57] from-[#A54B57] relative  w-full pt-60">
                <ServiceCompany></ServiceCompany>
            </div>
            
            
            
            <div class=" bg-linear-to-t to-[#A54B57] from-[#A54B57] relative w-full flex justify-center items-center border ">
                <div class=" relative w-[90%] flex flex-col justify-center items-center  ">
                    <div class="relative w-full flex justify-center items-center">Top Selling Products</div>
                    <div  class="relative w-full border flex justify-between">
                           
                                <ThreeTopLevel 
                                            v-for="fromthreetoplevel in toplevel"
                                            :key="fromthreetoplevel"
                                            :url="fromthreetoplevel.srcurl"
                                            :name="fromthreetoplevel.name"
                                            :description="fromthreetoplevel.description"
                                            :price="fromthreetoplevel.price"
                                            >
                                </ThreeTopLevel>
                           
                    </div>
                </div>
            </div>


            
            
            <div class="bg-linear-to-t to-[#A54B57] from-[#A54B57] relative w-full flex justify-center items-center">
                <Contectsupport></Contectsupport>
            </div>
            
            
            
            <div class="bg-linear-to-t to-[#A54B57] from-[#A54B57] relative w-full flex justify-center items-center pt-10">
                <Footer></Footer>
            </div>





        </div>
    </div>
</template>
<script>
// ________________import pages__________________
import Footer  from "../footer/Footer.vue"
import Elementhome from './Elementhome.vue';
import Showmainproduct from './Showmainproduct.vue';
import ServiceCompany from './Service_company.vue';
import ThreeTopLevel from './ThreeTopLevel.vue';
import Contectsupport from "./Contectsupport.vue";


// ________________import images_________________
import Projector  from "../../../public/images/projector.png"
import pc from "../../../public/images/computer.png"
import dc from "../../../public/images/dc.png"
import ram from "../../../public/images/ram.png"
import usb from "../../../public/images/USB_Flash.png"

export default{

    components:{
        Elementhome,
        Showmainproduct,
        ServiceCompany,
        ThreeTopLevel,
        Footer,
        Contectsupport
    },

    data(){
        return {
            itemimages:[
                //  limit of images == 20 
                {srcimage:Projector},
                {srcimage:Projector},
                {srcimage:Projector},
                {srcimage:pc},
                {srcimage:dc},
                {srcimage:ram},
                {srcimage:usb},
                {srcimage:ram},
            ],




            toplevel:[
                {srcurl:Projector,name:'Projector',description:'projector is good',price:120},
                {srcurl:Projector,name:'Projector',description:'projector is good',price:120},
                {srcurl:Projector,name:'Projector',description:'projector is good',price:120},
            ]
        }
    }
}

</script>


