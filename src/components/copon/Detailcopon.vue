<script setup lang="ts">
import axios from "axios";
import { Ref, ref } from "vue";
import router from "../../routers";

const coponapi: Ref<any> = ref([]);
console.log(coponapi, "123456");
axios.get("/public/datacopon.json").then(function (r) {
  coponapi.value = r.data;
  //  console.log(r);
});

function gohome() {
  router.push("/");
  // console.log("ee")
}


</script>
<template>
  <div class="head showdow">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <button @click="gohome" class="btn btn" type="button">
          <i class="bi bi-chevron-compact-left"></i>
        </button>
        <img src="/src/assets/logo-reward.png" alt="" class="icons" />
      </div>
    </nav>
  </div>

  <div
    class="card"
    v-for="coponapis in coponapi.filter((datas:any) => datas.id === parseInt(`${$route.params.id }`) )"
  >
   

    <div>
      <img :src="coponapis.img_reward" class="card-img-top" alt="..." />
      <h5>{{ coponapis.aproduct }}</h5>
      <p>{{ coponapis.condition }}</p>
    </div>
 
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#open" >กดเพื่อแลกสิทธิ์</button>



<!-- Modal ยืนยันรับสิทธิ์-->
<div class="modal fade" id="open" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">

        <h5 class="modal-title" id="exampleModalLabel">ยืนยันรับสิทธิ์</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ยืนยันรับสิทธิ์
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirm">ยืนยัน</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal otp -->
<div class="modal fade" id="confirm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="input-group"> 
      <!-- input OTP-->
      <input type="text" aria-label="First name" class="form-control">
     <input type="text" aria-label="Last name" class="form-control">
     <input type="text" aria-label="Last name" class="form-control">
     <input type="text" aria-label="Last name" class="form-control">
      
     </div>
      </div>
      <div class="modal-footer">
        
         <button type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirm_otp" >ยืนยัน</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal ทำการแลกสิทธ์เรียบร้อยแล้ว-->
<div class="modal fade" id="confirm_otp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ทำการแลกสิทธ์เรียบร้อยแล้ว
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
        
      </div>
    </div>
  </div>
</div>





  </div>
</template>
<style scoped>
img.icons {
  width: 200px;
  height: 80px;
  margin: auto;
}
.head {
  background-color: #ffffff;
  max-width: 500px;
  width: 100%;
  height: 90px;
  overflow: hidden;
}

.showdow {
  -webkit-box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);
}
.cardcopon {
  background-color: antiquewhite;
}
</style>
