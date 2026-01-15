<template>
    <div>
        <div class="relative w-full h-auto border border-gray-600 mt-10 flex flex-col justify-center items-center "> 
            <div class=" flex flex-col relative w-full h-[150px] bg-linear-to-t to-[#A54B57] from-[#A54B57] justify-center items-center">
                <div class="w-full h-[90%] relative px-[1%] flex flex-col  ">
                    <div class="flex space-x-10 overflow-hidden">
                        <Elementhome 
                            v-for="image in itemimages"
                            :key="image" 
                            :imagehomepage="image.srcimage">
                        </Elementhome>
                    </div>

                    
                </div>
                
                
            </div>
        </div>
        <div class="mt-10 relative">
            <Showmainproduct></Showmainproduct>
        </div>
    </div>
</template>
<script>
// ________________import pages__________________
import Elementhome from './Elementhome.vue';
import Showmainproduct from './Showmainproduct.vue';


// ________________import images_________________
import Projector  from "../../../public/images/projector.png"
import pc from "../../../public/images/computer.png"
import dc from "../../../public/images/dc.png"
import ram from "../../../public/images/ram.png"
import usb from "../../../public/images/USB_Flash.png"
export default{

    components:{
        Elementhome,
        Showmainproduct
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
            ]
        }
    }
}

</script>


