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
    <ul class="nav nav-pills mb-2" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">ทั้งหมด</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">ส่วนลดร้านค้า</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">อีเวนท์</button>
  </li>
</ul>

<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><div class="card1">เร็วๆนี้</div></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><div class="card1">เร็วๆนี้</div></div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><div v-for ="coponapis in coponapi"> 

    <!-- nav -->


    <div class="card mb-2 shadow p-0" style="max-width: 500px;">
<div class="row ">
  <div class="col-md-5">
    <img  :src=" coponapis.img "   class="card-img-top" alt="...">
  </div>

  <div class="col">
    <div class="p">
      <p>{{ coponapis.title }}</p>
      <h4 class=" content">{{ coponapis.content1 }}</h4>
      <h4 class=" content">{{ coponapis.content2 }}</h4>
      <p class=" content">{{ coponapis.content3 }}</p>
      <p class=" content">{{ coponapis.content4 }}</p>
        <div class="row ">
        <div class="col-6 d-flex justify-content-start"> <h5 class="price"> <img src="src/assets/logo-A.png" class="iconA"> {{ coponapis.price }} </h5>  </div>
        <div class="col-6 d-flex justify-content-end"> <button @click="gocopon(coponapis.id)" class="button " type="button" > <i class="bi bi-arrow-right"></i></button> </div>
      </div>
    
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
    <!-- nav -->

<br>

 
</template>

<style scoped>
.p{
padding-top: 5px;
}
.button{
width: 40px;
color: #ffffff;
background-color: #00A347;
padding: 0px;
margin: 0px;
border-top-right-radius: 0%;
border-top-left-radius: 0;
border-bottom-left-radius: 0%;
}


.iconA{
    width: 26px;

  
    
   
}
.price{
  color: #ce9c07;
  font-size: 15px;
  text-align: center;
}
.content{
  color: #00A347;
  text-align: center;
  line-height: 0.9;
}
.card-body>p{
  line-height: 0.5;
}

.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: #fff;
    background-color:#A98C00;
    width: 100%;
    padding-right: 0;
    padding-left: 0;

}


.rounded {
    border-radius: 0.8rem!important;
    
}


.nav{
  justify-content: center;
  background-color: #ffffff;
  width: 500px;
  -webkit-box-shadow: 0 10px 200px rgba(0,0,0,.2);
  box-shadow: 0 3px 3px rgba(0,0,0,.2);
  text-align: center;
 


 
}

.nav-item[data-v-51038dcf] {
    width: 150px;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, 0.15);
   
}

.nav-link {
    text-align: center;
    padding: 0.5rem 1rem;
    color: #00A347;}
  
.card {
  
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.90rem;
    height: 200px;
}

.card1{
  border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.90rem;
    height: 500px;
   
}
 .col-md-5 >img{
  object-fit: cover;
  /* border-radius: 0.90rem; */
width: 206px;
height: 199px;
border-radius: 10px 10px 10px 10px;
 
 
 
 
}





</style>