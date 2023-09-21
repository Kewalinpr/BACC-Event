<script setup lang="ts">
import axios from 'axios';
 import {ref} from "vue"

 const coponviewapi  = ref();

 axios.get('../../../public/dataAproduct.json')
.then(function (res) {
  coponviewapi.value=res;
      console.log(res);
  })
</script>
<template>
      <div class="head showdow">
    <img src="/src/assets/logo-reward.png" alt=""  class="icons"/>
   </div>

  
    <div class="card " style="width: 100%;">
    <img src="/src/assets/copon 10 b.png" class="card-img-top" alt="...">

    <div v-for="coponviewapis in coponviewapi" >
    <h5 > {{ coponviewapis.aproduct }}</h5>
    <p>{{ coponviewapis.condition }}</p>
    
    </div>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  

   
</template>
<style scoped>
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
.cardcopon{
   background-color: antiquewhite;
}
</style>