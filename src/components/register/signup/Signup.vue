<template>
    <div class=" fixed top-0 left-0 bg-[#B6606D] w-full h-full flex justify-center items-center" >
        
       
        <div class="relative overflow-hidden  bg-white w-[35%] rounded-[10px] h-[98%] px-5">
            <form action="">

                <div class=" border-black mt-1.5">
                    <div class="flex justify-center items-center">
                        <img src="../../../../public/images/ktalogo.png" alt="ktalogo" class="size-25">
                    </div>
                   <div class=" relative -top-2 flex justify-center items-center text-[18px]  font-serif">
                        <h1 class="text-[#B6606D]"> Create account </h1>
                   </div>
                   

                   <div class="space-y-2 relative ">           
                       <div class="flex justify-between items-center  space-x-2">
                            <div class=" relative flex flex-col ">
                               <div class="relative text-black text-[13px]">
                                    First name:
                               </div>
                                <div class="">
                                    <input type="text" placeholder="First name" class=" rounded-sm  w-44 h-7 px-2 border border-[#B6606D]  outline-none text-black text-[13px]">
                                </div>
                            </div>
                           
                            <div class=" relative flex flex-col ">
                               <div class="relative text-black text-[13px]">
                                    Last name:
                               </div>
                                <div class="">
                                    <input type="text" placeholder="Last name" class=" rounded-sm  w-44 h-7 px-2 border border-[#B6606D]  outline-none text-black text-[13px]">
                                </div>
                            </div>              
                        </div>
                       
                       
                        <div class="flex justify-between items-center  space-x-2">
                            <div class=" relative flex flex-col ">
                               <div class="relative text-black text-[13px]">
                                    Gender:
                               </div>
                                <div class="">
                                    <input type="text" placeholder="Gender" class=" rounded-sm  w-44 h-7 px-2 border border-[#B6606D]  outline-none text-black text-[13px]">
                                </div>
                            </div>
                           
                            <div class=" relative flex flex-col ">
                               <div class="relative text-black text-[13px]">
                                    Age:
                               </div>
                                <div class="">
                                    <input type="text" placeholder="Age" class=" rounded-sm  w-44 h-7 px-2 border border-[#B6606D]  outline-none text-black text-[13px]">
                                </div>
                            </div>              
                        </div>


                        <div class=" relative flex flex-col ">
                               <div class="relative text-black text-[13px]">
                                    Tel:
                               </div>
                                <div class="">
                                    <input type="text" placeholder="Tel.." class=" rounded-sm  w-full h-7 px-2 border border-[#B6606D]  outline-none text-black text-[13px]">
                                </div>
                        </div>   
                      
                        <div class=" relative flex flex-col ">
                               <div class="relative text-black text-[13px]">
                                    Gmail:
                               </div>
                                <div class="">
                                    <input type="text" placeholder="Gmail" class=" rounded-sm  w-full h-7 px-2 border border-[#B6606D]  outline-none text-black text-[13px]">
                                </div>
                        </div>  

                        <div class=" relative flex flex-col ">
                               <div class="relative text-black text-[13px]">
                                    Password:
                               </div>
                                <div class="">
                                    <input type="text" placeholder="Password" class=" rounded-sm  w-full h-7 px-2 border border-[#B6606D]  outline-none text-black text-[13px]">
                                </div>
                        </div>   
                        
                        <div class=" relative flex flex-col ">
                               <div class="relative text-black text-[13px]">
                                    Address:
                               </div>
                                <div class="">
                                    <input type="text" placeholder="Address" class=" rounded-sm  w-full h-7 px-2 border border-[#B6606D]  outline-none text-black text-[13px]">
                                </div>
                        </div>   
                        
                       <div class="relaive   flex justify-between items-center mt-3.5 ">
                            <div class="*:text-[13px] flex  space-x-1.5 ">
                                <div>Change Langauge to</div>
                                <div><button class="underline hover:text-[#B6606D]">Khmer</button></div>
                            </div>
                            <div class="flex *:text-[13px] space-x-2">
                                <div>
                                    <button class="bg-gray-500 rounded-[5px]  px-3 py-1 text-white" >

                                        Cancel

                                    </button>
                                </div>
                                <div>
                                    <button class="bg-[#B6606D] rounded-[5px]  px-3 py-1 text-white">Create</button>
                                </div>
                            </div>
                       </div>

                    </div>
                    
                </div>

            </form>
        </div>



 
    </div>
</template>
<script>
    export default{
        data(){
            return {
                        

            }
        },
        methods:{
           
        }
    }

</script>