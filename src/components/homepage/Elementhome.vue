<template>
    <div class="relative w-full h-full  ">
        <div class="w-36 h-full border-b-2 border-t-2  border-white flex justify-center items-center">
            <img :src="imagehomepage" alt="" class=" border-blue-300">
        </div>
        
    </div>
</template>
<script>
export default{
    props:["imagehomepage"],
    data(){
        return {

        }
    }
}

</script>