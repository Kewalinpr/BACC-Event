<script setup lang="ts">
import axios from 'axios';
import {ref} from "vue"
// import { useRoute } from 'vue-router';
import router from '../../routers';

const coponapi  = ref();
axios.get('../../../public/datacopon.json')
.then(function (r) {
    coponapi.value=r.data;
      console.log(r);
  })

 
    function gocopon(id :number) {
        router.push(`/coponview/${id}`) 
        console.log(id)
    }

  


</script>

<template>


    <!-- nav -->
     <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link " aria-current="page" href="#">ทั้งหมด</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">ส่วนลดร้านค้า</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#">อีเว้นท์</a>
  </li>
  </ul>
    <!-- nav -->

<br>
<div v-for ="coponapis in coponapi"> 
 
<div class="card mb-3 shadow p-0 mb-2 bg-body rounded"  :key="coponapis.id" >
  
  <div class="row">
    <div class="col-md-5 ">
      <img  :src=" coponapis.img "   class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-5">
      <div class="card-body-md-8 ">
        
        <p class="card-text">{{ coponapis.title }}</p>
        <h5 class="card-title text-success">{{ coponapis.content }}</h5>
        <h5 class="card-text text-warning  "><img src="src/assets/logo-A.png" class="iconA">{{ coponapis.price }}
          <button @click="gocopon(coponapis.id)" class="btn btn btn-success" type="button" > <i class="bi bi-arrow-right"></i></button>
        </h5>
        
      </div>
       
    </div>
    
  </div>
  
     </div>

     </div>

 
</template>

<style scoped>

.iconA{
    width: 30px;

    margin-right:500px;
    
   
}


.rounded {
    border-radius: 0.8rem!important;
    
}

.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: #fff;
    background-color: #ce9c07;
 
    
}

.nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #00A347;}
.card {
  
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.90rem;
}
.col-md-5 >img{
  object-fit: cover;
  border-radius: 0.90rem;
 
 
}






</style>