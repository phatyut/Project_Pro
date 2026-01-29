<template>
    <div class="border ">
        <div>{{ elementname }}</div>
        <div><img :src="images" alt=""></div>
        <div>{{ elementdesc }}</div>
        <div>
            <div>{{ elementprice }}</div>
            <div>
                <button @click="btnchildloop">buy</button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:[
            "elementname",
            "elementdesc",
            "elementprice",
            "btnchildloop",
            "images"
        ],
    data(){
        return{

        }
    }
}
</script>