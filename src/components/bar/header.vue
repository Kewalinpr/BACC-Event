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
  <div class="head" >
    <img src="/src/assets/logo-reward.png" alt=""  class="icons"/>
</div>

<div id="container">
  
  <div class="box" id="box1"> <div class="photoid"> <img src="/src/assets/photoID.jpg"  class="rounded-circle  float-start " alt="..."></div></div>
  <div class="box" id="box4"> <img src="/src/assets/phone.png"> 
    <img src="/src/assets/cardId.png"> 
    <img src="/src/assets/birthday.png"> 
     </div>
  <div class="box" id="box2"><div class="content" v-for="apis in api">
        <h5> {{apis.firstname}} {{ apis.lastname }}</h5>
        <p > {{apis.phone}}</p>
        <p > {{apis.id_card}}</p>
        <p > {{apis.birthdate}}</p>
       </div></div>

  <div class="box" id="box3">
    <div class="iconsetting"><img src="/src/assets/seting.png" class="rounded float-end ">  </div>
    <div class="imgscore"> <img src="/src/assets/score.png" class=" rounded  float-end "> </div>
    <br><br>
    <div class="link"><a href="#">วิธีการได้คะแนน</a></div>
  
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
      <img src="/src/assets/slide-3.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="/src/assets/slide-4.jpg" class="d-block w-100" alt="...">
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

.carousel-item>img{
  height: 200px;
}

.head{

  background-color: #ffffff;
  max-width: 500px;
  width: 100%;
  height:90px;
  overflow: hidden;
  
-webkit-box-shadow: 0 30px 50px rgba(0,0,0,.2);
box-shadow: 0 30px 50px rgba(0,0,0,.2);

  
 }
 .head>img{
    width: 200px;
    height: 80px;
    margin: auto;
    
 }
 

.carousel-indicators [data-bs-target] {
   
    width: 10px;
    height: 10px;
    border-radius: 100%;
}

.iconsetting>img{
  width: 30px;
  padding-top: 0px;
  margin: auto;
}

.imgscore>img{
  width: 120px;
  padding-top: 30px;


}

.link>a{
font-size: 14px;
color: #00A347;
text-decoration: underline;


}
.content{

height: 0px;
text-align: left;
color: #A98C00;
font-weight: bold; 
font-size: 15px;
line-height: 10px;
}


.photoid>img{
width: 90px;
height: 90px;
border: 5px solid #B69902;
margin: 10px;


}



#container {
  display: flex;
  background-color: #EEEEE4;
  max-width: 500px; 
  height: 160px;
  align-items: center;
  padding: 0;
  margin: 0;
 
  
   

}

.box {
  width: 100px;
  height: 100px;
 

 
  color: #f5f7fa;
  /* border: 1px solid #ccd1d9; */
  text-align: center;
 
  align-items: center;
}

#box3 {
  margin-left: auto;
  width: 100px;
  height: 150px;
  background-color: #EEEEE4;
  margin-right: 0;
 
}
#box2 {
  margin-left: auto;
  width: 200px;
  height: 100px;
  background-color: #EEEEE4;
  padding-right: 50px;
  margin-right: 30px;
   
}
#box4 {
  margin-left: auto;
  width: 20px;
  height: 50px;
  background-color: #EEEEE4;
   
}
#box4>img {
 
  width: 16px;
 
   
}

   
</style>