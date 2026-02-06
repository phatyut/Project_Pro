<template>
    <div class="grid w-70 h-90 bg-blue-400">
        <div>{{ name }}</div>
        <div>{{ price }}</div>
    </div>
</template>
<script>
export default{
    props:["name","price"],
    data(){
        return {

        }
    }
}
</script>