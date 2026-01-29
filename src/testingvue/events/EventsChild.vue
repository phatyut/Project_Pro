<template>
    <div class="flex">
            <div class="flex flex-col  *:hover:bg-gray-600 *: cursor-pointer">
                <div class="flex flex-col" 
                        v-for="name in names" 
                        :key="name"
                        @click="srcimg = name.srcimg">

                                {{ name.itemname }}
                </div>
            </div>
            <div>
                <img :src="srcimg" alt="">
            </div>
    </div>
</template>
<script>
import dc from "../../../public/images/dc.png"
import pc from "../../../public/images/computer.png"
export default{
    data(){
        return {
            srcimg:dc,
            names:[
                {itemname:"DC",srcimg:dc},
                {itemname:"computer",srcimg:pc},
               
            ]
        }
    }
}
</script>