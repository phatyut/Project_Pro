<template>
    <div>
        <div >I love you.</div>
        <div v-if="love">_Yes I love you too.😘</div>
        <div v-else>😢</div>

        <div>
            <template>
                
            </template>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            love:true
        }
    }}
</script>