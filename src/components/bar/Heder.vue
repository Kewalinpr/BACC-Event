<script setup lang="ts">
 import axios from 'axios';
 import {ref} from "vue"

 const api  = ref();

 axios.get('../../../public/customer.json')
.then(function (response) {
     api.value=response;
      console.log(response);
  })
</script>

<template>
  <div class="head showdow" >
    <img src="/src/assets/logo-reward.png" alt=""  class="icons"/>
</div>


<div class="card ">

  <div class="container">
    <div class="iconsetting"><img src="/src/assets/Iconsettings.png" class="rounded float-end "> </div>
  
  <div class="row">
    <div class="col">
      <div class="photoid"> <img src="/src/assets/photoID.jpg"  class="rounded-circle img-thumbnail " alt="..."></div>
    </div>
    <div class="col order-5">
      <div class="iconscore">
     <img src="/src/assets/score.png" class="rounded float-end ">
</div> <br><br>
<div class="link" > 
  <a href="#">วิธีการได้คะแนน</a>
</div>
<!-- เว้นเอาไว้ -->
    </div>
    <div class="col order-1 col-sm-6 col-md-">
      <div class="text-warning " v-for="apis in api">
        <h5 class="card-title ">{{ apis.firstname }} {{ apis.lastname }}</h5>
        <p class="card-text"> {{ apis.phone }}</p>
        <p class="card-text"> {{  apis.id_card }}</p>
        <p class="card-text">{{  apis.birthdate }}</p>
       </div>
    </div>
  </div>
</div>


</div>

    <!-- carousel slide bar -->
   <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/src/assets/slide-1.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="/src/assets/slide-2.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="/src/assets/slide-3.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  
</template>


<style scoped >
.link{
  text-align: right;
  
}
.iconscore>img{
  width: 90px;
}
.col>img{
  width: 100px;

}

.score>img{
    width: 100px;
}

.head{

  background-color: #ffffff;
  max-width: 500px;
  width: 100%;
  height:90px;
  overflow: hidden;

  
 }
 .head>img{
    width: 200px;
    height: 80px;
    margin: auto;
    
 }
 
 .showdow{
-webkit-box-shadow: 0 30px 50px rgba(0,0,0,.2);
box-shadow: 0 30px 50px rgba(0,0,0,.2);
}
.carousel-indicators [data-bs-target] {
   
    width: 10px;
    height: 10px;
    border-radius: 100%;
}
.card{
    max-width: 500px; 
    height: 180px;
    background-color: #EEEEE4;
    
}
.iconsetting>img{
  width: 20px;
  
}

   
</style>