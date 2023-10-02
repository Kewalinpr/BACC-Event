<script setup lang="ts">
import router from "../../routers";

        function gohistory() {
        router.push("/historyview"); }
</script>

<template>



<ul class="nav  nav-justified">
   
  
  <li class="nav-item">
     
    <a class="nav-link " aria-current="page" href="#"><img src="/src/assets/footericon.png"> <br>สิทธิพิเศษ</a>
  </li>
  <li class="nav-item">
    
    <a class="nav-link" href="#"><img src="/src/assets/footericon.png"> <br>กิจกรรม</a>
  </li>
  <li class="nav-item">
 
    <a class="nav-link" href="#"><img src="/src/assets/footericon.png"> <br>ประวัติคะแนน</a>
  </li>
  <li class="nav-item">
   
     <button class="nav-link" @click="gohistory()"><img src="/src/assets/footericon.png"> <br><a> ประวัติแลกของรางวัล</a></button> 
    
    
  </li>

</ul>




</template>

<style scoped>
 ul{
  list-style-type: none;
  overflow: hidden;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 500px;
  
}
  

li>img{
  width: 35px;
  /* padding-top: 5px; */
  margin-top: 5px;
}

li {
  float: left;
  border-right:1px solid#C3A948;


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

.active {
  background: transparent linear-gradient(0deg, #C3A948 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
  color: #009F47;
}


</style>