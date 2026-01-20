<template>

           <!-- ___________________________________ -->            
            <div class=" relative  border flex flex-col  shrink-0 w-[31%]   ">
                    
                    <div class="w-full h-50 object-cover flex justify-center items-center border">
                        <img :src="url" alt="image_from_toplevel" class="w-60">
                    </div>
                    <div>
                        <div>{{ name }}</div>
                        <div>{{description}}</div>
                        <div>{{price}}</div>
                    </div>
                   
            </div>
           <!-- ___________________________________ -->
  
</template>
<script>
    export default{
        props:[
                    "url",
                    "name",
                    "description",
                    "price"
                ],
        data(){
            return{

            }
        }
    }

</script>