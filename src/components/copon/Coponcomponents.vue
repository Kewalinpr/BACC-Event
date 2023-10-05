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
<div class="card mb-0 shadow p-0" >
<div class="row ">
  <div class="col-md-5">
    <img  :src=" coponapis.img "   class="card-img-top" alt="...">
  </div>

  <div class="col">
    <div class="cardcontent">
      <p>{{ coponapis.title }}</p>
      <h4 class=" content fontW">{{ coponapis.content1 }}</h4>
      <h4 class=" content fontW">{{ coponapis.content2 }}</h4>
      <h5 class=" content fontW">{{ coponapis.content3 }}</h5>
      <h5 class=" content fontW">{{ coponapis.content4 }}</h5>
        <div class="row ">
        <div class="col-6 d-flex justify-content-start"> 
          <div class="pointimg"> <img src="src/assets/logo-A.png" class="iconA">  </div>
           <div><p v-html="coponapis.price"></p></div>
        </div>
        <div class="col-6 d-flex justify-content-end"> <button @click="gocopon(coponapis.id)" class="button1 " type="button" > <i class="bi bi-arrow-right"></i></button> </div>
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

.pointimg{
  padding-right: 5px;
}
.fontW{
  font-weight: bold;
}
.pivilate{
  padding: 8px;
 
}
.cardcontent{
padding-top: 5px;

}
.button1{
width: 40px;
height:  44px;
color: #ffffff;
font-size:26px;

background-color: #00A347;
padding: 0px;
margin: 0px;
border-bottom-right-radius: 25%;
}
button {
border-radius: 0px;
border: 1px solid transparent;
padding: 0.6em 1.2em;
font-size: 1em;
font-weight: 500;
font-family: inherit;
background-color: #ffffff;
cursor: pointer;
transition: border-color 0.25s;
}
.iconA{
width: 26px;
}
/* .price{
  color: #ce9c07;
  font-size: 15px;
  text-align: center;
} */
.content{
color: #00A347;
text-align: center;
line-height: 0.9;
}
.card-body>p{
line-height: 0.5;
}
.nav-justified .nav-link.active, .show>.nav-link  {
color:  #ffffff;
background-color:#A98C00;
width: 100%;
padding-right: 0;
padding-left: 0;
width: 150px;
  }
.nav{
justify-content: center;
background-color: #ffffff;
width: 500px;
-webkit-box-shadow: 0 10px 200px rgba(0,0,0,.2);
box-shadow: 0 3px 3px rgba(0,0,0,.2);
text-align: center;
list-style-type: none;
}
.nav-item[data-v-51038dcf] {
/* width: 150px; */
 border-right: 2px solid rgba(0, 0, 0, 0.15);
}

.nav-link {
text-align: center;
color: #00A347;
}
.card {
border: 1px solid rgba(0, 0, 0, 0.15);
border-radius: 0.90rem;
height: 200px;
}
.card1{
  /* border: 1px solid rgba(0, 0, 0, 0.15); */
border-radius: 0.90rem;
height: 500px;
text-align:center;
padding-block: 100px;

}
.col-md-5 >img{
object-fit: cover;
/* border-radius: 0.90rem; */
width: 206px;
height: 199px;
border-radius: 10px 0px 0px 10px;
}
body {
margin: 0;
display: flex;
place-items: center;
min-width: 320px;
min-height: 100vh;
    
}


</style>