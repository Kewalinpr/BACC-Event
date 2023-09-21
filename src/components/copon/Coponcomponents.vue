<script setup lang="ts">
import axios from 'axios';
import {ref} from "vue"

const coponapi  = ref();
axios.get('../../../public/datacopon.json')
.then(function (r) {
    coponapi.value=r.data;
      console.log(r);
  })
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
        <h5 class="card-title ">{{ coponapis.content }}</h5>
        <p class="card-text">{{ coponapis.id }}</p>

       
      </div>
    </div>
  </div>
</div>

 
</template>

<style scoped>




.rounded {
    border-radius: 0.8rem!important;
    
}

.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: #fff;
    background-color: #ce9c07;
 
    
}
/* .row {
  
    margin-top: 0 0 0;
    margin-right: 0 0 0;
    margin-left: 0 0 0;
} */

.nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #00A347;}
.card {
  
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.80rem;
    
}




</style>