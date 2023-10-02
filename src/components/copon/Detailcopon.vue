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
    <nav class="navbar">
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
    <div class="content">
      <p v-html="coponapis.aproduct"></p>
      <img :src="coponapis.img_reward" class="card-img-top" alt="..." />
      <br><br>
      <div class=" d-flex justify-content-between">
        <div class="">จำนวน</div>
        <div class="">1</div>
      </div>

      <div class=" d-flex justify-content-between">
        <div class="">คะแนน</div>
        <div class="">
          <img src="/src/assets/iconC.png" class="icon" /> {{ coponapis.price }}
        </div>
      </div>
      <hr />
      <p3 v-html="coponapis.title1"> </p3>
      <p v-html="coponapis.condition"></p>
    </div>
    <button
      type="button"
      class="buttoncoupon"
      data-bs-toggle="modal"
      data-bs-target="#open"
    >
      กดเพื่อแลกสิทธิ์
    </button>
    
  </div>

  <!-- Modal ยืนยันรับสิทธิ์-->
  <div
    class="modal fade "
    id="open"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    
  >
    <div class="modal-dialog modal-dialog-centered ">
     
      <div class="modal-content">

        
        <div class="modal-header">
          <img src="/src/assets/question.svg" class="question">
       </div>
        <div class="modal-body"> <h5>ยืนยันรับสิทธิ์</h5>
          <h6> ท่านจะยืนยันการแลกสิทธิ์หรือไม่? </h6>
        </div>
        <br><br>
        
          <div class="row"> 
            <div class="col-6">  <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            ยกเลิก
          </button>
        </div>
          <div class="col-6"><button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            data-bs-toggle="modal"
            data-bs-target="#confirm"
          >
            ยืนยัน
          </button>
        </div>
          
          </div>
         
        
      </div>
    </div>
  </div>

  <!-- Modal otp -->
  <div
    class="modal fade"
    id="confirm"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <h4>กรุณากรอกรหัส 4 หลัก</h4>
          <p> ที่ได้รับจากเจ้าหน้าที่เพื่อใช้สิทธิ์</p>
         
        <div class="modal-body">
          
          <div class="row">
            <!-- input OTP-->
       
            <input type="num" minlength="1" maxlength="1" size="1" class="col form-control input-group mx-3" />
            <input type="num" minlength="1" maxlength="1" size="1" class="col form-control input-group mx-3" />
            <input type="num" minlength="1" maxlength="1" size="1" class="col form-control input-group mx-3" />
            <input type="num" minlength="1" maxlength="1" size="1" class="col form-control input-group mx-3" />
          </div>
        </div>
        <br><br>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            data-bs-toggle="modal"
            data-bs-target="#confirm_otp"
          >
            ยืนยัน
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal ทำการแลกสิทธ์เรียบร้อยแล้ว-->
  <div
    class="modal fade"
    id="confirm_otp"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <img src="/src/assets/question.svg" class="question">
         
        </div>
        <div class="modal-body success"> <h4>ทำการแลกสิทธ์เรียบร้อยแล้ว</h4>
          <p> ขอบคุณที่ร่วมกิจกรรม </p>
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn btn-cl btnclose"
            data-bs-dismiss="modal"
          >
            ปิด
          </button>
         
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

.modal-body {
  padding: 0px;
}
.btn-cl{
  background-color: #00A051;
  justify-content: center;
  color: #efefe5;
  width: 150px;
  height: 50px;
  border-radius: 30px;
  font-size: 20px;
}
.success > h4{
  font-size: 25px;
  color: #00A051;
 
}
.input-group {
 border-width: 3px;
 border-radius: 5px;
 width: 20px;

 
}
.content > p3 {
  color: #00a051;
}
.content > h4 {
  color: #00a051;
}
hr {
  color: #a58d29;
}
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
.icon {
  width: 30px;
}
.card {
  width: 500px;
  height: 100%;
 
  background-image: url(https://cdn.discordapp.com/attachments/953647482527686658/1157203418281168937/wall.jpg?ex=6517c12a&is=65166faa&hm=e5b858d3dab3b11aec6874e45aaa898c8243f20cf17c1a8b939708f398c438ff&);
}
.content {
  background-color: #efefe5;
  padding: 30px;
  border-radius: 20px;
  max-height: 100vh;
  height: 100%;
  opacity: 0.9;
}
.buttoncoupon {
  background-color: #00a051;
  border-radius: 30px;
  color: #ffffff;
  padding: 20px;
  font-size: 20px;
  position: fixed;
  bottom: 0px;
  margin: 1rem;
  width: 400px;
 }

 .modal-content {
    position: relative; 
   display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px;
    margin: 50px;
    pointer-events: auto;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 0.9rem;
    outline: 0;
  }

  .modal-body>h5{
    color: #00a051;
    font-size: 40px;
  }

.btn-primary {
    color: #fff;
    background-color:#00A051;
    border-color: #00A051;
    border-radius: 20px;
    padding: 10px;
    width: 100px;
}
.modal-header {
 border-bottom:none;
 justify-content: center;



}
.modal-footer {
border-top:none;
}
.question{
  width: 100px;
  justify-content: center;
  margin-top: -130px;
}
.modal-content>h4{
 color: #00A051;

 font-size: 30px;
}
.btn-primary[data-v-0275c540] {
    color: #fff;
    background-color: #00A051;
    border-color: #00A051;
    border-radius: 30px;
    padding: 8px;
    width: 100%;
    font-size: 25px;
}
.btn-secondary {
    color: #fff;
    background-color:#A58D29;
    border-color: #A58D29;
    border-radius: 30px;
    padding: 8px;
    width: 100%;
    font-size: 25px;
}



</style>
