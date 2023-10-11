<script setup lang="ts">
import axios from "axios";
import { Ref, ref,} from "vue";
import router from "../../routers";
import otp from "../copon/Otpinput.vue";


const otpValue = ref('')


const coponapi: Ref<any> = ref([]);
axios.get("/public/datacopon.json").then(function (r) {
  coponapi.value = r.data;
 
});
function gohome() {
  router.push("/");}
 
 
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

  <div class="card_detail " >

    <div class="content_detail " v-for="coponapis in coponapi.filter((datas:any) => datas.id === parseInt(`${$route.params.id }`) )">

      <div class="aproduct fontsize"><p v-html="coponapis.aproduct"></p></div>
      <img :src="coponapis.img_reward" class="card-img-top" alt="..." />
      <br><br>
      <div class=" d-flex justify-content-between">
        <div class="fontW fontsize">จำนวน</div>
        <div class="fontcolor fontW fontsize">1</div>
      </div>

      <div class=" d-flex justify-content-between">
        <div class="fontW fontsize">คะแนน</div>
        <div class=" d-flex justify-content-between"> <img src="/src/assets/iconC.png" class="icon" ><p class="fontsize" v-html="coponapis.price"> </p></div> 
      </div>
      <hr>
       <div class="condition fontsize"> 
        <p class= "fontcolorgrean fontsize25" v-html="coponapis.title1"> </p>
        <p v-html="coponapis.condition"></p>
      </div>
    </div>
    <div class="btdetail"> 
      <bt type="button" class="buttondetail" data-bs-toggle="modal" data-bs-target="#open"> กดเพื่อแลกสิทธ์</bt>
      </div>
    </div>
   
 
  <!-- Modal ยืนยันรับสิทธิ์-->
  <div class="modal fade " id="open" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered ">
     <div class="modal-content">
        <div class="modal-header">
          <img src="/src/assets/question.svg" class="question">
       </div>
        <div class="modal-body"> 
          <h5>ยืนยันการแลกสิทธิ์</h5>
          <h6> ท่านจะยืนยันการแลกสิทธิ์หรือไม่? </h6>
        </div>
          <br>
        <div class="row g-2"> 
        <div class="col"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> ยกเลิก</button></div>
        <div class="col"><button type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirm">ยืนยัน</button></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal otp -->
  <div class="modal fade" id="confirm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content-otp">
        <div class="modal-bodycotent">
          <h4>กรุณากรอกรหัส 4 หลัก</h4>
          <p> ที่ได้รับจากเจ้าหน้าที่เพื่อใช้สิทธิ์</p>
        </div>
       <div class="modal-body">
        <div ref="container" class="row">
            <!-- input OTP-->
            <div class="container">
            <div class="row justify-content-md-center">
            <div class="row">
                    <otp 
                   :digit-count="4"
                    @update:otp="otpValue = $event"
                   ></otp>
                  <!-- <p>The current OTP value is: {{ otpValue }} </p> เผื่อได้เอาไปใช้ต่อ -->
           </div>
           </div>
           </div>
           </div>
       </div>
        <br><br>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirm_otp">ยืนยัน</button>
        </div>
      </div>
    </div>
  </div>


<!-- Modal ทำการแลกสิทธ์เรียบร้อยแล้ว-->
  <div class="modal fade" id="confirm_otp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content-confirm">
        <div class="modal-header">
          <img src="/src/assets/question.svg" class="question">
         </div>
        <div class="modal-body-success"> 
          <h4>ทำการแลกสิทธ์เรียบร้อยแล้ว</h4>
          <p> ขอบคุณที่ร่วมกิจกรรม </p>
        </div>
        <div class="modal-footer justify-content-center"><button type="button" class="btn btn-cl btnclose" data-bs-dismiss="modal">ปิด</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.aproduct{
  text-align: center;
}
.card_detail{
  padding: 30px;
  background-image: url(https://cdn.discordapp.com/attachments/953647482527686658/1157203418281168937/wall.jpg?ex=6517c12a&is=65166faa&hm=e5b858d3dab3b11aec6874e45aaa898c8243f20cf17c1a8b939708f398c438ff&);
}
.content_detail {
  background-color: #efefe5;
  padding:  20px;
  border-radius: 20px;
  opacity: 0.9;
 
}
.buttondetail {
    color: #fff;
    background-color: #00A051;
    font-weight: bold;
    border-radius: 30px;
    padding: 6px;
    width: 300px;
    margin: 5;
    font-size: 25px;
    text-align: center;
}
.btdetail{
  text-align: center;
   position:fixed;
   left:0px;
   bottom:30px;
   height:30px;
   width:100%;
 }
 .fontW{
  font-weight: bold;
}
.fontcolor{
  color: #A58D29;
}
.fontcolorgrean{
color: #00A051;
font-weight: bold;
}
.fontsize{
  font-size: 20px;
}
.fontsize25{
  font-size: 25px;
}
.aproduct>p{
  padding-top: 10px;
  padding-bottom: -2px;
  font-weight: bold;
  line-height: 0.8; 

}
hr {
  color: #a58d29;
  margin: 0;
  border: 0;
  opacity: 25;
  margin-top: -18px;
  margin-bottom: 20px;
 }
.sizebt {
 color:  #A58D29;
 font-size:35px;

}
.modal-body {
  padding: 0px;
  margin: 0px;
  text-align: center;
 }
 .modal-body>h6{
    padding-top: 5px;
    font-size: 20px;
    font-weight: bold;
  }
  .modal-body>h5{
    color: #00A051;
    font-size: 30px;
    font-weight: bold;
  }
  .modal-bodycotent>h4{
    color: #00A051;
    font-size: 30px;
    font-weight: bold;
  }
  .modal-bodycotent>p{
    
    font-size: 22px;
    font-weight: bold;
  }
  .modal-body-success>h4{
    color: #00A051;
    font-size: 25px;
    font-weight: bold;
  }
  .modal-body-success>p{
    
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 20px;
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
.content_detail > h4 {
  color: #00a051;
}
.icon {
  width: 45px;
  height: 45px;
  margin: auto;
  padding-right: 4px;
  padding-bottom: 20px;
  margin-bottom: 30px;
  text-align: center;
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
.icons{
 width: 190px;
 height: 80px;
 margin-left: auto;
 margin-right: auto;

 }
 .modal-content {
    /* position: relative;  */
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
    text-align: center;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 190%;
    background-image: url(https://cdn.discordapp.com/attachments/953647482527686658/1161522099513458718/Screenshot_2023-10-11_113327.png?ex=65389ac0&is=652625c0&hm=08f7c1a4ed3440e1cc0f5e3e38549bf8d1c446f9fd2f27c4025c2caac630b83b&);
  }
  .modal-content-otp {
    
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 28px;
    margin: 50px;
    pointer-events: auto;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 0.9rem;
    outline: 0;
    text-align: center;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 190%;
    background-image: url(https://cdn.discordapp.com/attachments/953647482527686658/1161522099513458718/Screenshot_2023-10-11_113327.png?ex=65389ac0&is=652625c0&hm=08f7c1a4ed3440e1cc0f5e3e38549bf8d1c446f9fd2f27c4025c2caac630b83b&);
  }
  .modal-content-confirm{
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
    text-align: center;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 190%;
    background-image: url(https://cdn.discordapp.com/attachments/953647482527686658/1161522099513458718/Screenshot_2023-10-11_113327.png?ex=65389ac0&is=652625c0&hm=08f7c1a4ed3440e1cc0f5e3e38549bf8d1c446f9fd2f27c4025c2caac630b83b&);
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

.btn-primary[data-v-0275c540] {
    color: #fff;
    background-color: #00A051;
    border-color: #00A051;
    border-radius: 30px;
    padding: 5px;
    width: 100%;
    font-size: 22px;
    font-weight: bold;
}
.btn-secondary {
    color: #fff;
    background-color:#A58D29;
    border-color: #A58D29;
    border-radius: 30px;
    padding: 5px;
    width: 100%;
    font-size: 22px;
    font-weight: bold;
}
.btnclose{
  color: #fff;
  background-color: #00A051;
    
    border-radius: 35px;
    padding: 5px;
    width: 70%;
    font-size: 22px;
    font-weight: bold;
}
.col{
 padding: -5px;
}

  </style>
