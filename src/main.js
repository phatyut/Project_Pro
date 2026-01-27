import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


// _________________setup fontawesome_________________
import { library } from '@fortawesome/fontawesome-svg-core' ;
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
         faHouse,
         faUserSecret,
         faMagnifyingGlass,
         faCartShopping,
         faHouseChimney,
         faGear,
         faFilePen,
         faStar
      
       
        
         } from '@fortawesome/free-solid-svg-icons' 
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(
            faUserSecret,
            faHouse,
            faFacebook,
            faMagnifyingGlass,
            faCartShopping,
            faHouseChimney,
            faGear,
            faFilePen,
            faStar
           
            
           
        );



import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
library.add(faStarRegular)

// _____________import pages/components_________________
import Home from "./components/homepage/Homepage.vue"
import Product from './components/product/Product.vue'
import Newproduct from './components/newproduct/Newproduct.vue'
import Service from './components/service/Service.vue'
import Login from './components/register/login/Login.vue'
import Signup from './components/register/signup/Signup.vue'

import Testvue from './testingvue/Testvue.vue';




// router setup
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/',redirect:"/product"},
        {path:'/home',component:Home},
        {path:'/product',component:Product},
        {path:'/newproduct',component:Newproduct},
        {path:'/service',component:Service},
        {path:'/login',component:Login},
        {path:'/signup',component:Signup},


// ----------------test vue


        {path:'/testvue',component:Testvue}
      
    ]
})


const app = createApp(App)





// _________________register fontawesome_________________
app.component('font-awesome-icon', FontAwesomeIcon)




app.use(router);
app.mount('#app');
