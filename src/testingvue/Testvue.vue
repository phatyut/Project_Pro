<template>
    <div class="bg-black fixed  flex-col flex top-0 h-full w-full text-white overflow-y-scroll">

        <router-link to="/home">
            <button class="bg-green-800 p-1.5 rounded-lg">
                Back home page
            </button>
        </router-link>     
        
        
        <div class="*:border border-black">


                <!-- <div>
                    <Unknown></Unknown>
                </div>
            
            
                <div>
                    <Condition></Condition>
                </div>

            
                <div>
                    <List_loop></List_loop>
                </div> -->
            
            
                <!-- <div>
                    <Events></Events>
                </div> -->


                <div>
                    <InputForm></InputForm>
                </div>

        </div>

    </div>
</template>
<script>
import Unknown from './unknown/Unknown.vue';
import Condition from './condition/Condition.vue';
import List_loop from './for_list_rendering/List_loop.vue';
import Events from './events/Events.vue';
import InputForm from './Inputform/InputForm.vue';
    export default{

        components:{
            Unknown,
            Condition,
            List_loop,
            Events,
            InputForm
        },

        data(){
            return {

            }
        }
    }
</script>