
<template>
    <div class="grid gap-5 grid-cols-6">
        <Childprop v-for="element  in items" :key="element" :name="element.name" :price="element.price">

        </Childprop>
    </div>
</template>
    <script >
    import Childprop from './Childprop.vue';

    export default{
        components:{Childprop},
        data(){
            return{
                items:[
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                    {name:"one",price:100},
                ]
            }
        }
    }
    
    </script>