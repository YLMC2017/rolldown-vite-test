<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="test1">
    <div class="test2" >
    </div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <router-view></router-view>
  <HelloWorld msg="Vite + Vue" />
</template>

<style lang="scss" scoped>
.test1 {
  .test2 {
    height: 100px;
    width: 100px;
    background-color: blue;
  }
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
