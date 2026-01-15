<template>
    <div class=" fixed top-0 left-0 bg-[#B6606D] w-full h-full flex justify-center items-center" >
         <div class="relative overflow-hidden  bg-white w-[30%] rounded-[10px] h-[75%] px-5">
            <div class=" border-black mt-1.5">
                    <div class="flex justify-center items-center">
                        <img src="../../../../public/images/ktalogo.png" alt="ktalogo" class="size-30">
                    </div>
                  
            </div>
            <div class=" flex justify-center items-center h-auto w-full ">
                <div class="relative w-[90%]  flex flex-col">
                     <div class="">
                        <div class="  -top-2 flex  items-center text-[18px]  font-serif">
                                <h1 class="text-[15px]"> Log in </h1>
                        </div>
                        <div class="relative flex w-full justify-center items-end">
                            <div class="relative  border w-full"></div>
                        </div>
                    </div>

                     <div class="flex justify-between items-center flex-col relative w-full  py-10 space-y-3 ">
                            <div class=" relative  w-full ">
                               <div class="relative text-black text-[13px]">
                                    Gmail:
                               </div>
                                <div class=" relative">
                                    <input type="text" placeholder="First name" class=" rounded-sm  w-full h-7 px-2 border border-[#B6606D]  outline-none text-black text-[13px]">
                                </div>
                            </div>
                           
                           
                            <div class=" relative  w-full ">
                               <div class="relative text-black text-[13px]">
                                    Password:
                               </div>
                                <div class=" relative">
                                    <input type="text" placeholder="Password" class=" rounded-sm  w-full h-7 px-2 border border-[#B6606D]  outline-none text-black text-[13px]">
                                </div>
                            </div>                      
                    </div>

                </div>
            </div>

            

           

            <div class=" flex justify-center items-center h-auto w-full ">
                <div class="relative w-[90%]  flex flex-col">
                    <div class="flex justify-end items-center space-x-2">
                        <div>
                           <button class="text-[13px] text-black bg-gray-100 px-3 py-1  rounded-[5px]">Cancel</button>
                       </div>
                       <div>
                           <button class="text-[13px] text-white bg-[#B6606D] px-3 py-1  rounded-[5px]">Log in</button>
                       </div>
                    </div>
                </div>
            </div>
                           
        
        </div>
    </div>
</template>