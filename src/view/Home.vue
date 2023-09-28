<script setup lang="ts">

import HeaderBar from "../components/bar/Heder.vue";
import Coponcomponents from "../components/copon/Coponcomponents.vue";
import Footerbar from "../components/footerbar/Footerbar.vue";

</script>

<template> 
  <div> 
    <!-- v-for="item in 5" :key="item" -->
     <HeaderBar></HeaderBar> 
     <Coponcomponents ></Coponcomponents> 
     <Footerbar> </Footerbar> 
    
    </div> 
</template>