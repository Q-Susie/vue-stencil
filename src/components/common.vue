<template>
  <section class="top">
      <div v-if="!this.$store.state.isLogin">
        <router-link to="/login">请前往登录</router-link> 
      </div>
      
      <div v-if="(this.$store.state.isLogin) || this.getLogin.isLogin">
        <router-link to="/">你已登录</router-link> 
        <div @click="logout" style="margin-top:20px;cursor: pointer">退出</div>
      </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {

      }
    },
    methods: {
      logout(){
        this.$store.dispatch('logout', false)
      }
    },
    mounted() {

    },
     computed: {
       ...mapGetters(['getLogin'])
    }
  }
</script>
