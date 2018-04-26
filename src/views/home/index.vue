<style lang="scss" src="./index.scss"></style>

<template>
  <section id="index">
    欢迎来到 vue-stencil ！
    <div v-if="!this.$store.state.isisLogin">
      <router-link to="/login">请前往登录</router-link> 
    </div>
    
    <div v-if="this.$store.state.isisLogin">
      <router-link to="/login">你已登录</router-link> 
    </div>
  </section>  
</template>

<script src="./index.js"></script>
