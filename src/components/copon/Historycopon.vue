<script setup lang="ts">
import axios from "axios";
import {ref} from "vue";
import router from "../../routers";

const  coponhitory  = ref();

axios.get("/public/historycoupon.json") 
.then(function (h) {
coponhitory.value = h.data;
});

function gohome() {
  router.push("/");}
  
function gohistory() {
  router.push("/historyview");}
 
  </script>
  

<template>
 <div class="shadow">
  <div class="head" >
        <button @click="gohome" class="btn sizebt" type="button">
          <i class="bi bi-chevron-left"></i>
        </button>
        <img src="/src/assets/logo-reward.png" alt="" class="icons" />
  </div> 
</div>

  <div class="cardhitory" > 

    <div class="content1"> 
       <h5 class="fontW fontCenter">ประวัติแลกของรางวัล</h5>
       <div class="lines"><hr></div>

       <div class="content" v-for="coponhitorys in coponhitory">
    <div class="row g--1"> 
      <div class="col">
          <div> <img :src="coponhitorys.img_reward" class="img-fluid" />   </div>
      </div>
        <div class="col-7">
          <div class="d-flex justify-content-between ">
          <div class="titlecopou"> <p v-html="coponhitorys.content"> </p> </div> 

          <div class="row ">
          <div class="col d-flex justify-content-start"> 
          <div class="pointimg"> <img src="src/assets/logo-A.png" class="iconA">  </div>
          <div > <p  v-html="coponhitorys.point" > </p>  </div>
        </div>
        </div>
        </div>
  <div class="linecontent"><hr></div>
          <div class=" d-flex justify-content-between ">
          <div class="">{{coponhitorys.Date}}</div>
          <div class="">{{coponhitorys.day_ex}}</div>
         </div>
  <div class="linecontent"><hr></div>
         <div class=" d-flex justify-content-between ">
         <div class="">{{coponhitorys.status1}}</div>
         <div><p v-html="coponhitorys.status2" ></p> </div>
        </div>
     </div>
    
  </div>
  
  <div class="line2"><hr></div>
  </div>
  <br>
  <!-- <div class="line1"><hr></div> -->
      <p class="p fontCenter">สงวนลิขสิทธิ์ 2019 ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร</p>
</div>

</div>
      <ul class="nav  nav-justified">
        <li class="nav-item">
           <a class="nav-link " aria-current="page" href="#"><img src="/src/assets/iconB.png"> <br>สิทธิพิเศษ</a>
        </li>
        <li class="nav-item">
           <a class="nav-link" href="#"><img src="/src/assets/iconB.png"> <br>กิจกรรม</a>
        </li>
        <li class="nav-item">
           <a class="nav-link" href="#"><img src="/src/assets/iconB.png"> <br>ประวัติคะแนน</a>
        </li>
       <li class="nav-item">
          <a class="nav-link" @click="gohistory()"><img src="/src/assets/iconB.png"> <br><a> ประวัติแลกของรางวัล</a></a>
      </li>
    </ul>
</template>


<style scoped>
.sizebt {
 color:  #A58D29;
 font-size:40px;
}
.head{
  background-color: #ffffff;
  width: 100%;
  height:80px;

  display: flex;
  align-items: center;
  justify-content: center;
  float: top;
  margin-bottom: 3px;
}
.shadow{

-webkit-box-shadow: 0 12px 34px rgba(0, 0, 0, 0.12);
-moz-box-shadow: 0 12px 34px rgba(0, 0, 0, 0.12);
box-shadow: 0 12px 34px rgba(0, 0, 0, 0.12);

}
.titlecopou>p{
  font-size: 15px;
  font-weight: bold;
}
.img-fluid{
border-radius: 9px;
}
.sizebt {
 color:  #A58D29;
 font-size:35px;

}
.fontCenter{
  text-align: center;
}
.fontW{
  font-weight: bold;
}
.iconA{
  width: 30px;
  padding-right: 5px;
  margin-bottom: 15px;
}
.p{
font-size: 13px;
font-weight: bold;
}
.iconC{
  width: 60px;
  height: 40px;
  padding: 0;
  margin: 0;
}
.lines>hr{
  color: #C3A948;
margin: 20px;
opacity: 10;
padding: 0.8px;

}
.line>hr{
 color: #C3A948;
margin: -10px;
opacity: 10;
padding:  0px;

 }
 .linecontent{
  color: #000000;
margin: -15px;
opacity: 10;
padding:  1px;
padding-right: 15px;
 }
 .line1>hr{
 color: #C3A948;
margin: 15px;
opacity: 10;
padding:  1px;

 }
 .line2>hr{
 color: #C3A948;
margin: 15px;
opacity: 10;
padding:  1px;

 }


.icon>img{
  width: 200px;
  height: 140px;
  border-radius: 10px;
 }
 .rounded-start {
    border-bottom-left-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
}
.content1>hr{
  padding: 20px;
  margin: 20px;
}
.content1>h5{
  color:#00a051;
  font-size: 25px;
  padding-bottom: 20px;
  padding-top: 50px;
}

.p{
padding-top: 100px;

}
.content {
  background-color: #efefe5;
  padding:  3px;
  border-radius: 30px;
  opacity: 0.9;
}
.content1 {

  background-color: #efefe5;
  padding:  15px;
  margin: 20px;
  border-radius: 30px;
  opacity: 0.9;
}
.cardhitory {
width: 100%;
padding: 10px;
padding-bottom: 150px;
background-image: url(https://cdn.discordapp.com/attachments/953647482527686658/1157203418281168937/wall.jpg?ex=6517c12a&is=65166faa&hm=e5b858d3dab3b11aec6874e45aaa898c8243f20cf17c1a8b939708f398c438ff&);
}

.head {
  background-color: #ffffff;
  max-width: 500px;
  width: 100%;
  height: 90px;
  overflow: hidden;
}
img.icons {
  width: 200px;
  height: 80px;
  margin: auto;
}

.nav-link>img{
  width: 42px;
}
 ul{
  list-style-type: none;
  overflow: hidden;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 500px;
}
li {
  float: left;
  border-right:1.2px solid#C3A948;
  height: 56px;
}
li a {
  display: block;
  color: #009F47;
  text-align: center;
  padding: 0;
  text-decoration: none;
  font-size: 13px;
}
li a:hover:not(.active) {
  background-color: #cbc381;
  color: #009F47;
}
.nav{
  background-color: #ffffff;
  
  color: #ffffff;
  padding: 5px;
  font-size: 10px;
  position: fixed;
  bottom: -10px;
  margin-bottom: 10px;
  width: 500px;
  height: 70px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}
.btn {
 color:  #cbc381;
 font-size:26px;
}
</style>