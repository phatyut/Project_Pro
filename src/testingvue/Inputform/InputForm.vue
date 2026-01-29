<template>
    <div class="relative bg-amber-500">
        <div>
            <input type="text" v-model="text" class="border border-blue-500 outline-none">
            <div> show result : <span class="text-green-900">{{ text }}</span></div>
        </div>

        <div>
            <select name="" id="" v-model="nameselect" multiple>
                <option value="one">one</option>
                <option value="two">two</option>
                <option value="three">three</option>
                <option value="four">four</option>
            </select>
            <div>You has select: <span class=" text-rose-600 hover:underline hover:cursor-pointer">{{ nameselect }}</span></div>
        </div>

        <div class="text-gray-500 bg-gray-700">
            <div><input v-model="radiobtn" type="radio" value="one" ></div>
            <div><input v-model="radiobtn" type="radio" value="two" ></div>
            <div><input v-model="radiobtn" type="radio" value="three" ></div>
            <div><input v-model="radiobtn" type="radio" value="four" ></div>
            <div><input v-model="radiobtn" type="radio" value="five"></div>
            <div class=""> :{{ radiobtn }}</div>
           
        </div>

            <div>
                <input v-model.number="age" type="text" />
                <p>Age (as number): {{ age }} | Type: {{ typeof age }}</p>
            </div>




            <div class="bg-yellow-900">
                <form action="" @click.prevent="">
                    <div></div>

                </form>


            </div>
 
        
    </div>
</template>
<script>
export default{
    data(){
        return {
            text:'',
            nameselect:['one'],
            radiobtn:'',
            age:0

        }
    }
}
</script>
<style scoped>

select{
 background-color: aqua;
}
</style>