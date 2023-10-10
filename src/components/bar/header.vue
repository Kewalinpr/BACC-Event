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
</div> </div>


<div class="customer ">


  <div class="row">
  <div class="col ">
    <div class="photoid"> <img src="/src/assets/photoID.jpg"  class="rounded-circle  float-start " alt="..."></div>
  </div>
  </div>
 <div class="row">
  <div class="row">
    <div> <img src="/src/assets/phone.png" class="iconsphone"> </div>
  </div>
  
  <div class="row ">
    <div>  <img src="/src/assets/cardId.png" class="iconscontent"> </div>
  </div>
  <div class="row ">
    <div>  <img src="/src/assets/birthday.png" class="iconscontent"> </div>
  </div>
 
  </div>
  
  
  <div class="col">
    <div class="content" v-for="apis in api">
        <div class="firstname"><h5> {{apis.firstname}} {{ apis.lastname }}</h5> </div>
        <div class="data"> 
        <p > {{apis.phone}}</p>
        <p > {{apis.id_card}}</p>
        <p > {{apis.birthdate}}</p></div>
       </div>
  </div>
 

  <div class="row">
  <div class="col">
   <div class="iconsetting"><img src="/src/assets/seting.png" class="rounded float-end ">  </div>
    <div class="imgscore"> <img src="/src/assets/score.png" class=" rounded  float-end "> </div>
    <br><br>
    <div class="link"><a href="#">วิธีการได้คะแนน</a></div>
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
.col{
  padding: 0;
  margin: 0;
}
.row{
  padding: 0;
  margin: 0;
--bs-gutter-x:0; 
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
  
}
.shadow{

  box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.3);
}
.icons{
 width: 180px;
 height: 80px;
 display: block;
 padding-top: 10px;
 margin-left: auto;
 margin-right: auto;

 }
 .customer  {
  display: flex;
  background-color: #EEEEE4;
  max-width: 500px;
  width: 100%; 
  height: 160px;
  align-items: center;
  padding: 0;
  margin: 0;

}

.firstname>h5{
  font-weight: bold;
}


.iconscontent{
  width: 25px;
 padding: 2px;
}
.iconsphone{
  width: 25px;
  padding: 2px;
}
.iconsetting>img{
  width: 35px;
  padding-top: 0px;
  margin: auto;
  padding-right: 0px;
  justify-content: end;
  padding-right: 0px;
}

.imgscore>img{
  width: 130px;
  padding-top: 30px;


}

.link>a{
font-size: 15px;
color: #00A347;
text-decoration: underline;


}
.content{

text-align: left; 
color: #A98C00;

font-size:15px;

}


.photoid>img{
width: 80px;
height: 80px;
border: 3px solid #B69902;
margin: 20px;


}





   
</style>