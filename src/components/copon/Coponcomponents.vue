<script setup lang="ts">
import axios from 'axios';
import {ref} from "vue"
import router from '../../routers';

const coponapi  = ref();
axios.get('../../../public/datacopon.json')
.then(function (r) {
    coponapi.value=r.data;
      console.log(r);
  })

function gocopon(id :number) {
router.push(`/coponview/${id}`) 
console.log(id)}
</script>

<template>
<!-- nav -->
    <ul class="nav nav-justified mb-2 " id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
    <button class="nav-link " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">ทั้งหมด</button>
     </li>
    <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">ส่วนลดร้านค้า</button>
     </li>
    <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"  aria-selected="true">อีเวนท์</button>
    </li>
   </ul>

  <div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><div class="card1">เร็วๆนี้</div></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><div class="card1">เร็วๆนี้</div></div>
  <div class="tab-pane fade  show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><div v-for ="coponapis in coponapi"> 


    <!-- nav -->

<div class="pivilate"> 
  
<div class="cardpivilate shadow" >
<div class="row ">
  <div class="col">
    <img  :src=" coponapis.img "   class="imgcoupon" alt="...">
  </div>

  <div class="col">
    <div class="cardcontent">
      <h6 class="">{{ coponapis.title }}</h6>
      <h5 class=" ">{{ coponapis.content1 }}</h5>
      <h5 class=" ">{{ coponapis.content2 }}</h5>
      <h4 class=" ">{{ coponapis.content3 }}</h4>
      <h4 class=" ">{{ coponapis.content4 }}</h4>
         <div class="padding">
        <div class="row">
          <div class="col-1"></div> 

        <div class=" col d-flex"> 
         <div class="pointimg"> <img src="src/assets/logo-A.png" class="iconA">  </div>
           <div class="price"><h4 v-html="coponapis.price"></h4></div>
        </div>
        <div class=" col d-flex justify-content-end "> <button @click="gocopon(coponapis.id)" class="button1 " type="button" > <i class="bi bi-arrow-right"></i></button> </div>
      </div> 
    </div>
   </div>
  </div>
</div>
</div>

</div> 
</div>
</div>
</div>
  <br>
</template>

<style scoped>
.padding{
padding-top: 12px;
}
.row{
  padding: 0;
  margin: 0;
}
.col{
  padding: 0;
  margin: 0;
}
body {
margin: 0;
display: flex;
place-items: center;
min-width: 320px;
min-height: 100vh;
    
}
.imgcoupon{
width: 100%;
height: 248px;
border-radius: 10px 0px 0px 10px;
}


.cardcontent{
color: #00A347;
text-align: center;
max-width: 100%;

}
.cardcontent>h6{
font-size: 15px;
font-weight: bold;
padding-top: 20px;
color: black;
}
.cardcontent>h5{
font-size: 25px;
font-weight: bold;
}
.cardcontent>h4{
font-size: 18px;
font-weight: bold;

}
.price>h4{
  font-size: 24px;
  font-weight: bold;
  padding-top: 10px;
  font-weight: bold;
}

.pivilate{
  padding: 10px;
  max-width: 100%;
  border-left: solid 1px #e0dddd;
  border-right: solid 1px #e0dddd;
}


.cardpivilate {
border: 1px solid rgba(0, 0, 0, 0.15);
border-radius: 0.90rem;
width: 100%;}


.button1{
width: 49px;
height: 55px;
padding: 0;
color: #ffffff;
font-size:33px;
margin-bottom: 0;
background-color: #00A347;

border-bottom-right-radius: 25%;
}
button {
border-radius: 0px;
border: 1px solid transparent;
/* padding: 0.2em 1.1em; */

font-weight: 500px;
font-family: inherit;
background-color: #ffffff;
cursor: pointer;
transition: border-color 0.25s;
}
.iconA{
width: 30px;
padding-top: 10px;
}
.pointimg{
  padding-right: 10px;
}


.nav-justified .nav-link.active, .show>.nav-link  {
color:  #ffffff;
background-color:#A98C00;
height: 55px;
width: 150px;


  }
.nav{
font-size: 20px;
height: 55px;
font-weight: bold;
background-color: #ffffff;
width: 100%;
-webkit-box-shadow: 0 10px 200px rgba(0,0,0,.2);
box-shadow: 0 3px 3px rgba(0,0,0,.2);

}
.nav-item[data-v-51038dcf] {
border-right: 2px solid rgba(0, 0, 0, 0.15);
}

.nav-link {
text-align: center;
color: #00A347;
padding: 11px;

}




</style>