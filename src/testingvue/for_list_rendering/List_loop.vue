<template>
    <div class="">
        <div class="text-center underline"> <a href="https://vuejs.org/guide/essentials/list.html">List_loop_rendering</a></div>
        <div    class="" 
                v-for="(element,key,index) in items"
                :key="element" >
                   {{ index }}_{{ key  }}:{{ element }}
            </div>
        <div class="flex ">
            <Child_loop v-for="items in list"
                        :key="items.name"
                        :elementname="items.name"
                        :images="items.image"
                        :elementdesc="items.desc"
                        :elementprice="items.price"
                        :elementchildloop ="items.btn"
                     
                        >

            </Child_loop>
        </div>
        <div>love</div>
    </div>
</template>
<script>
import Child_loop from './Child_loop.vue';
import Pc from "../../../public/images/computer.png"
export default{
    components:{
                    Child_loop    
                },
    data(){
        return{

            items:[
                {
                    names:'numberone',
                    numbertwo:"numbertwo"
                },
                {
                    names:'numberone',
                    numbertwo:"numbertwo"
                },
                {
                    names:'numberone',
                    numbertwo:"numbertwo"
                },
                {
                    names:'numberone',
                    numbertwo:"numbertwo"
                },
            ],
            list:[
                {name:"element_name",image:Pc , desc:"this is a testing on child in list_loop",price:100,},
                {name:"element_name",image:Pc , desc:"this is a testing on child in list_loop",price:100,},
                {name:"element_name",image:Pc , desc:"this is a testing on child in list_loop",price:100,},
                {name:"element_name",image:Pc , desc:"this is a testing on child in list_loop",price:100,},

            ],

        }
    },methods:{
        btn(){
            alert("love you.");
        }
    }
}
</script>