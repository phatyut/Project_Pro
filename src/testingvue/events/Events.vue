<template>
    <div>
             <div   
                    class="relative w-75  h-40 border border-blue-900" 
                    @mousemove="movemouse"
                    :style="{backgroundColor:'hsl('+h+','+s+'%,'+l+'%)'}"
                    >
            </div>
            <div>{{ h }}-{{ s }}-{{ l }}</div>

            <div class=" relative border border-white flex  text-white" >
                   <div class="flex ">
                        <div class="">

                        </div>

                   </div>
                 
            </div>

            <div>
                <EventsChild></EventsChild>
            </div>

            <div>
               
            </div>
    </div>
</template>
<script>
import EventsChild from "./EventsChild.vue";
import Tester from "../../../public/images/tester.png"
export default{
    components:{
        EventsChild
    },
    data(){
        return {
            urlsrc:Tester,
            imgs:[
                {name:"tester"},
                {name:"tester"},
                {name:"tester"},
                {name:"tester"}
            ],
           
        }
    },methods:{
        movemouse(){
            this. h = Math.floor(Math.random()*360);
            this. s = Math.floor(Math.random()*360);
            this. l = Math.floor(Math.random()*360);
        },
        clickcount(){
            alert("alert name");
        }
    }
}
</script>