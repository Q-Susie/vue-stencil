<style lang="scss" src="./login.scss"></style>

<template>
  <section id="login">
    <router-link to="/">首页</router-link>
    <section class="login-bg">
      <div class="container">
        <div class="loging">
          <div class="login-switch">
            <i @click="changeLogin"><img :src="loginImg" alt=""></i>
            <p>{{loginText}}</p>
          </div>
          <div class="login-pass" v-if="isPasswordLogin">
            <div class="log">密码登录</div>
            <div class="login-input">
              <ul>
                <li class="login-input1"><input type="text" placeholder="请输入手机号码" v-model="phone"></li>
                <li class="login-input2"><input type="password" placeholder="请输入密码" v-model="password"></li>
                <li class="login-input3"><router-link to="/forget" class="">忘记密码？</router-link></li>
                <li class="login-input4" @click="login"><button>登陆</button></li>
              </ul>
            </div>
            <div class="other">还没账号，<router-link to="/register" class="">立即注册</router-link></div>
          </div>
          <div class="login-wechat" v-else>
            <div class="log">微信扫码登录</div>
            <div class="login-code">
              <img src="../../assets/img/code.jpg" alt="">
            </div>
            <div class="other"><a @click="changeLogin">密码登录</a> <router-link to="/register">立即注册</router-link></div>
          </div>
        </div>
      </div>
    </section>
  </section>  
</template>

<script src="./login.js"></script>
