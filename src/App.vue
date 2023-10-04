<script setup lang="ts"></script>

<template>
  <div class="position-relative w-100 h-100">
    <div class="page-size">
      <router-view></router-view>
    </div>
  </div>

</template>

<style>
.page-size {
  max-width: 500vh;
  width: 500px;
  height: auto;
  background-color: rgb(255, 255, 255);
  height: auto;
  border: 3px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}
</style>
