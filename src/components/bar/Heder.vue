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

<div class="iconsetting"><img src="/src/assets/Iconsettings.png" class="rounded float-end "> </div>

<div class="photoid"> <img src="/src/assets/photoID.jpg"  class="rounded-circle img-thumbnail float-start " alt="..."></div>
<div class="content" v-for="apis in api">
        <h5>{{ apis.firstname }} {{ apis.lastname }}</h5>
        <p > {{ apis.phone }}</p>
        <p > {{  apis.id_card }}</p>
        <p >{{  apis.birthdate }}</p>
       </div>
<div class="imgscore"> <img src="/src/assets/score.png" class=" rounded  float-end "> </div>
<div class="link"> <a href="#">วิธีการได้คะแนน</a></div>





       

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
  text-decoration: underline;
  
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
    height: 500px;
    background-color: #EEEEE4;
    padding-left: 10px;
    margin:0 ;
    
}
.iconsetting>img{
  width: 20px;
}
.photoid>img{
  width: 80px;
 
}
.imgscore>img{
  width: 80px;
  

}

.link>a{
width: 50px;
}
.content{
 
  width: 400px;
  text-align-last: center;
  display: block;
 
}


   
</style>