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
<div class="shadow">
  <div class="head" >
    <img src="/src/assets/logo-reward.png" alt=""  class="icons"/>
</div> 
</div>


<div class="customer ">

<div class="seting"> 
    <div class="iconsetting"><img src="/src/assets/seting.png" class="rounded float-end ">  </div>
</div>

  <!-- <div class="firstname" v-for="apiss in api >
  <div class"pppp"> <h5>{{apiss.firstname}} {{ apiss.lastname }}</h5> </div> 
  </div> -->

  <div class="img-id">
  <div class="col">
    <div class="photoid"> <img src="/src/assets/photoID.jpg"  class="rounded-circle  float-start " alt="..."></div>
  </div>
</div>
<div class="row"> 
<div class="col-1 pt-2"> 
   <div class="row">
    <div class="iconcustomer"> <img src="/src/assets/phone.png" class="iconsphone"> </div>
  </div>
  
  <div class="row ">
    <div class="iconcustomer">  <img src="/src/assets/cardId.png" class="iconscontent"> </div>
  </div>
  <div class="row ">
    <div class="iconcustomer">  <img src="/src/assets/birthday.png" class="iconscontent"> </div>
  </div>
</div>
<div class="col"> 
    <div class="content" v-for="apis in api">
        <div class="firstname"><p> {{apis.firstname}} {{ apis.lastname }}</p> </div>
        <div class="data"> 
        <p > {{apis.phone}}</p>
        <p > {{apis.id_card}}</p>
        <p > {{apis.birthdate}}</p>
      </div>
       </div>
  </div>
   

  <div class="col p-0">
    <div class="imgscore"> <img src="/src/assets/score.png" class=" rounded  float-end "> </div>
    <br><br><br>
    <div class="link"><a href="#">วิธีการได้รับคะแนน</a></div>
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
      <img src="/src/assets/slide-1.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="/src/assets/slide-1.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span  aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  
</template>


<style scoped >
.imgscore>img{
  width: 130px;
  padding-top: -20px;
}
.data{
  padding-top: 10px;
  line-height: 0.7;
  font-weight: bold;
 
}
.firstname>p{
  font-weight: bold;
  padding-top: 10px;
  margin-left: -30px;
  font-size: 23px;
  margin-bottom: -1px;
}
.iconcustomer{
  width: 50px;
 
}
.content{
position: relative;
color: #A98C00;
font-size:15px;
padding-top: -15px;
margin-top: -35px;
}
.carousel {
  position: relative;
   padding: 0px;
}
.carousel-item>img{
 height: auto;
  width: 100%;
 
}
.carousel-indicators [data-bs-target] {
   
   width: 4px;
   height: 4px;
   border-radius: 100%;
   margin-bottom: -15px;
   border: 2px solid #000000;
 
}
.head{
  background-color: #ffffff;
  width: 100%;
  height:80px;

  display: flex;
  align-items: center;
  justify-content: center;
  float: top;
  margin-bottom: 6px;
}
.customer  {
  background-color: #EEEEE4;
  max-width: 500px;
  width: 100%; 
  height: 160px;
  
 }
 .seting{
  text-align: right;
  padding: 10px;
  height: 50px;
 }
.shadow{

  -webkit-box-shadow: 0 12px 34px rgba(0, 0, 0, 0.12);
-moz-box-shadow: 0 12px 34px rgba(0, 0, 0, 0.12);
box-shadow: 0 12px 34px rgba(0, 0, 0, 0.12);

}
.icons{
 width: 180px;
 height: 80px;
 display: block;
 padding-top: 10px;
 margin-left: auto;
 margin-right: auto;

 }





.iconscontent{
 width: 25px;
 padding: 2px;
}
.iconsphone{
  width: 20px;
  padding: 2px;
}
 .iconsetting>img{
  width: 30px;
  padding-top: 0px;
  margin: auto;
  padding-right: 0px;
  justify-content: end;
  padding-right: 0px;
} 



.link>a{
font-size: 16px;
justify-content: end;
color: #00A347;
text-decoration: underline;
font-weight: bold;
}
.link{
  padding-top: 0px;
  text-align: right;
  padding-right: 9px;
}



.photoid>img{
width: 85px;
height:85px;
border: 3px solid #B69902;
margin-left: 20px;
margin-top: -15px;
}





   
</style>