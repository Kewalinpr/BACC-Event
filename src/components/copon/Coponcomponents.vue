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

 
    function gocopon() {
        router.push("/coponview") 
        // console.log("ee")
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



<div class="card mb-3 shadow p-0 mb-2 bg-body rounded" v-for ="coponapis in coponapi " style="max-width: 500px;">
  <div class="row g-0">
    <div class="col-md-4 ">
      <img  :src=" coponapis.img "   class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <p class="card-text">{{ coponapis.title }}</p>
        <h5 class="card-title text-success">{{ coponapis.content }}</h5>
        <h5 class="card-text text-warning "><img src="src/assets/logo-A.png" class="iconA">{{ coponapis.id }}</h5>
    </div>
    </div>
  </div>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button @click="gocopon" class="btn btn btn-success  " type="button" > <i class="bi bi-arrow-right"></i></button> </div>
</div>

 
</template>

<style scoped>

.iconA{
    width: 40px;
   
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
    border-radius: 0.80rem;
}






</style>