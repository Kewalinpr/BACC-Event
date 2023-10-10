<script setup lang="ts">
import router from "../../routers";

        function gohistory() {
        router.push("/historyview"); }
</script>

<template>
  <div class="footer"> 
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
      <a class="nav-link" @click="gohistory()"><img src="/src/assets/footericon.png"> <br><a> ประวัติแลกของรางวัล</a></a>
  </li>
</ul>
</div>
</template>

<style scoped>
.footer{
  padding-top: 60px;
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
</style>