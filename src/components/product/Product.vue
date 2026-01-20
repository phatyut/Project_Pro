<template>
    <div class=" overflow-y-hidden bg-linear-to-t to-[#A54B57] from-[#A54B57] fixed  h-full top-0 left-0 w-full" @click="clickproduct" >
        
        
        <div class="relative pt-1.5 w-full h-auto flex justify-center items-center">
            <div class="relative w-[60%] h-15 flex">

                <div class="relative w-[5%] h-15 border-r border-white" >
                    
                </div>
                <div class="relative border-b-[88%] border-t-[90%] h-15 bg-(--bg-white-blur) border-b bb-orange-50 border-white rounded-br-[5px] rounded-bl-[5px]" >df</div>
                <div class="relative w-[5%] h-15" >df</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:["clickproduct"],
        data(){
            return {
               showproduct:true
            }
        },methods:{
            clickproduct(){
                alert("I love you.")
            }
        }
    }
</script>