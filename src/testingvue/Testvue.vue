<template>
    <div class="bg-black fixed  flex-col flex top-0 h-full w-full text-white">

        <router-link to="/home">
            <button class="bg-green-800 p-1.5 rounded-lg">
                Back home page
            </button>
        </router-link>     
        
        
        <div class="*:border border-black">
                <div>
                    <Unknown></Unknown>
                </div>
                <div>
                    <Condition></Condition>
                </div>

        </div>

    </div>
</template>
<script>
import Unknown from './unknown/Unknown.vue';
import Condition from './condition/Condition.vue';
    export default{

        components:{
            Unknown,
            Condition
        },

        data(){
            return {

            }
        }
    }
</script>