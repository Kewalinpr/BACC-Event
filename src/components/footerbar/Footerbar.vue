<script setup lang="ts">

</script>

<template>

<ul>
  <li>
    <img src="/src/assets/iconB.png" alt="" class="icons" />
    <a  href="#home">สิทธิพิเศษ</a>
  </li>
  <li><img src="/src/assets/iconB.png" alt="" class="icons" />
    <a href="#news">กิจกรรม</a></li>
  <li><img src="/src/assets/iconB.png" alt="" class="icons" />
    <a href="#contact">ประวัติคะแนน</a></li>
  <li><img src="/src/assets/iconB.png" alt="" class="icons" />
    <a href="#about">ประวัติแลกของรางวัล</a></li>
</ul>




</template>

<style scoped>
 ul {
  list-style-type: none;

  overflow: hidden;
  background-color: #a90808;
  
}
.ul>a{
  font-size: 3px;
}

li {
  float: left;
  border-right:1px solid #bbb;

}

li:last-child {
  border-right: none;
}

li a {
  display: block;
  color: #C3A948;
  text-align: center;
  padding: 14px 14px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background: transparent linear-gradient(0deg, #C3A948 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
}
.icons{
  width: 50px;
  padding: 1px;
}






  
</style>