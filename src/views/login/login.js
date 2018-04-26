import { Message } from 'element-ui';

export default {
  name: 'login',
  data () {
    return {
      loginText: '微信扫码登录更快捷',
      loginImg: 'static/icon.png',
      isPasswordLogin: true,
      phone: '',
      password: ''
    }
  },
  methods: {  
    changeLogin () {
      this.isPasswordLogin = !this.isPasswordLogin
      console.log(this.isPasswordLogin)
      if (typeof this.isPasswordLogin === 'boolean' && this.isPasswordLogin === false ) {
        this.loginText = '使用密码登录'
        this.loginImg = 'static/icon2.png'
      } else {
        this.loginText = '微信扫码登录更快捷'
        this.loginImg = 'static/icon.png'
      }
    },
    login() {
      var ajaxData = {
        phone: this.phone,
        password: this.password
      }

      if(!ajaxData.phone){
        this.$message.error('手机号码不能空');
        return
      } else if(!ajaxData.password){
        this.$message.error('密码不能空');
        return
      }

      this.$post('/v2_0/api/login', ajaxData)
        .then(res => {  
            console.log("获取信息成功");  
            console.log(res);  
        })
        .catch(err =>{
          console.log("获取信息失败");  
          console.log(err);  
        })  
    }
  },
  watch: {    

  },
  components: {

  },
  mounted() {
    
  }
}