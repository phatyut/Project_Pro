<template>
  <div class="fixed bg-black h-full top-0 left-0 w-full scroll-smooth overflow-x-hidden" @click="clickproduct">
    <div class="z-20 fixed w-full top-0 h-auto flex justify-center items-center bg-black py-4 border">
      <div class="flex justify-between items-center relative w-full">
        <div class="text-white">Go back to home page</div>

        <div class="relative w-150 h-auto flex px-5 ">
          <div class="flex justify-center items-center relative h-14 bg-gray-600 rounded-l-[5px]">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-gray-300 text-[20px] px-4" />
          </div>
          <div>
            <input 
              type="text" 
              v-model="searchQuery"
              class="inset-shadow-search outline-none flex text-black font-semibold text-[13px] w-150 h-14 rounded-r-[5px] bg-gray-400 px-1.5"
              placeholder="Search products..."
            >        
          </div>
        </div>

        <div class="text-white">check another</div>
      </div>
    </div>

    <div class="relative h-12 w-full"></div>

    <div class="relative h-auto w-full text-white flex flex-col justify-center items-center">
     
      
      <div class="grid w-[98%]  gap-5 grid-cols-7 space-x-5.5 pt-10 items-center ">
        <!-- ✅ Use filteredItems here -->
        <Addproduct 
          v-for="Eproduct in filteredItems"
          :key="Eproduct.name"
          :name="Eproduct.name"
          :urltoproductpage="Eproduct.url"
          :evaluation="Eproduct.evaluation"
          :description="Eproduct.description"
          :price="Eproduct.price" 
          :setheightI="Eproduct.setheightI"  
          :setwidthI="Eproduct.setwidthI"                    
        />
      </div>
    </div>
  </div>
</template>

<script>
import Addproduct from './Addproduct.vue'
import Searchbar from '../searchbar/Searchbar.vue'
import dc from "../../../public/images/dc.png"
import pc from "../../../public/images/computer.png"

export default {
  components: { Addproduct, Searchbar },
  props: ["clickproduct"],
  data() {
    return {
      searchQuery: '',
      itemsproduct: [
        {name:'Projector',evaluation:3,url:dc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12 ,setwidthI:100 ,setheightI:100},
        {name:'adater',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'wifi',evaluation:3,url:dc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'cameras',evaluation:3,url:dc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'computer',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'phone',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'book',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'ball',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'Projector',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'love',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'Projector',evaluation:3,url:dc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12 ,setwidthI:100 ,setheightI:100},
        {name:'adater',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'wifi',evaluation:3,url:dc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'cameras',evaluation:3,url:dc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'computer',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'phone',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'book',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'ball',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'Projector',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'love',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'Projector',evaluation:3,url:dc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12 ,setwidthI:100 ,setheightI:100},
        {name:'adater',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'wifi',evaluation:3,url:dc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'cameras',evaluation:3,url:dc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'computer',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'phone',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'book',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'ball',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'Projector',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'love',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'Projector',evaluation:3,url:dc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12 ,setwidthI:100 ,setheightI:100},
        {name:'adater',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'wifi',evaluation:3,url:dc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'cameras',evaluation:3,url:dc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'computer',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'phone',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'book',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'ball',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'Projector',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
        {name:'love',evaluation:3,url:pc ,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat deserunt molestias, non laborum et minima magni, unde, quidem inventore doloremque facere distinctio voluptatum ratione corrupti aliquid tempora? Et, saepe.", price:12},
      ]
    }
  },
 computed: {
  filteredItems() {
    const query = this.searchQuery.toLowerCase()
    return this.itemsproduct.filter(Eproduct =>
      Eproduct.name.toLowerCase().startsWith(query)
    )
  }
}

}
</script>
