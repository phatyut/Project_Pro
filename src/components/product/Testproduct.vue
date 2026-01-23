<template>
    <div class="text-white bg-amber-300" :style="{width:setwidth +'px',height:setheight+'px'}">this is a testing on product in vue js</div>
</template>
<script>
export default{
    props:{
                setwidth : {
                    type:Number,
                    default:300
                },
                setheight : {
                    type:Number,
                    default:300
                }
                
            },
    data(){
        return {
            

        }
    }
}

</script>