<template>
  <div id="J_loginContainer">
    <div class="J_logo-box">
      <div><img src="./images/banner.png" alt=""></div>
    </div>
  
    <div class="J_login_content">
      <form>
        <div class="phone_login_container on">
          <section class="login_message_phone">
            <div class="J_input_warp">
              <div class="phone_code">
                <span>+86</span>
                <i class="iconfont iconarrow-bottom"></i>
              </div>
              <img class="clear" src="./images/clear.png" alt="" v-show="name"  @click="toShowClear" >
              <input class="input_num" type="tel" maxlength="11" placeholder="请输入手机号" v-model="name"  name="name" v-validate="'required|test'">
              <div class="right-line"></div>
              <div id="left-line"></div>
              <span style="color: red;" v-show="errors.has('name')">{{ errors.first('name') }}</span>
            </div>
            
          </section>        
        </div>
          <section class="login_message" v-show ="isShowPwd">
              <img class="pwd" src="./images/clear.png" alt="" v-show="psd" @click="toClearpsd">
            <input class="input_code" type="tel" maxlength="8" placeholder="请输入验证码" v-model="psd">
            <div :disabled="!isRightPhone || computeTime>0 " class="J_get_verification" @click.prevent="sendCode">
              {{computeTime>0 ? `${computeTime}s后发送`:'发送验证码'}}
            </div>
              <div class="right-line"></div>
              <div id="left-line"></div>
          </section>
          <section class="login_message_on" v-show ="isShowSms">
            <img class="info" src="./images/clear.png" alt=""  v-show="info" @click="toClearInfo" >
            <img class="psd_eyes" :src="seen?openeye:closeeyes" alt="" @click="isPassword">
            <input class="input_code" :type="isword" maxlength="8" placeholder="请输入密码" v-model="info" name="info" v-validate="'required'">
              <div class="right-line"></div>
              <div id="left-line"></div>
             <span style="color: red;" v-show="errors.has('info')">{{ errors.first('info') }}</span>
          </section>
        <button class="J_login_submit" @click.prevent="login">登录</button>
        <!-- <span class="J_regist">新用户注册</span> -->
      </form>
    </div>
    <div class="J_login_header_title" v-show ="isShowSms">
          <a href="javascript:;" class="on"  @click="ToSms">短信验证码登录</a>
          <a href="javascript:;">忘记密码</a>
          <a href="javascript:;" class="nRigest">新用户注册</a>
    </div>
    <div class="J_login_header_title" v-show ="isShowPwd">
          <a href="javascript:;" class="on" @click="ToPwd">账号密码登录</a>
          <a href="javascript:;" class="newRigest">新用户注册</a>
    </div>
    <div class="login_footer">
      <span>其他方式登录</span>
      <img src="./images/taobao.png" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import reqPwdLogin from '../../api'
// import {Button} from 'mint-ui'
  export default {
    name:'Login',
    data(){
      return{
        name:'',
        psd:'',  //三个都是清空密码功能
        info:'',
        isShowPwd:false,//切换密码登录
        isShowSms:true,//切换短信登录
        isword:'password',//密码显示
        seen:'',
        openeye:require('./images/openeyes.png'),
        closeeyes:require('./images/closeeyes.png'),
        computeTime:0,
      }
    },
    methods:{
      ToSms(){
        this.isShowPwd=true,
        this.isShowSms=false
      },
      ToPwd(){
        this.isShowPwd=false,
        this.isShowSms=true
      },
      toShowClear(){
        this.name='';
      },
      toClearpsd(){
        this.psd=''
      },
      toClearInfo(){
        this.info=''
      },
      isPassword(){
        this.isword = this.isword === 'password' ? 'text' : 'password';
        this.seen = !this.seen
      },
      sendCode(){
        //进行倒计时效果展示
        if (!this.intervalId) {
          this.computeTime = 10
          this.intervalId = setInterval(() => {
             this.computeTime--
          if (this.computeTime==0) {
            this.computeTime = 0
            clearTimeout(this.intervalId)
          }
        }, 1000);
        }
      },
       async login(){
         
        let names = ['name','info']
        const success = await this.$validator.validateAll(names)
        console.log(success)
        if(success){
          this.$router.replace({path: '/search'})
        }else if (!success) {
          this.$router.replace({path: '/login'})
        }{
          
        }       
      }
    },
    computed:{
      isRightPhone(){
        return /^1\d{10}$/.test(this.name)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#J_loginContainer
    width 100%
    height 100%
    background #fff
    box-sizing border-box
    overflow hidden
  .J_logo-box
    height 122.5px
    img
      width 100px
      height 45px
      margin-left 50%
      transform translateX(-50%)
      margin-top 10%
  .J_login_content
    width 100%
    margin-left 13px
    margin-top -18px
    form
      width 335px
      height 188px
      .phone_login_container
        
        width 335px
        .login_message_phone
          position relative
          margin-top 16px
          height 48px
          font-size 14px
          padding-left 20px
          span
              font-size 14px
          .J_input_warp
            border-bottom: 1px solid #E7E7E7
            padding-left 20px
            position relative
            overflow hidden
            .clear
              position absolute
              width 16px
              height 16px
              right 10px
              top 17px
            z-index 2
            
            .right-line
              position absolute
              top 47px
              left 50%
              width 0
              bottom 2px
              transition all 0.2s
              background #FF2869
              height 1px
            .input_num[data-v-2a2af8af]:focus+.right-line
              width 167px
            #left-line
              position absolute
              right 50%
              top 47px
              bottom 2px
              height 1px
              width 0
              background #FF2869
              transition all 0.2s
            .input_num[data-v-2a2af8af]:focus+.right-line+#left-line
              width 167px
          .input_num
              width 335px
              height 48px
              font-size 14px
              padding-left 57px
              box-sizing border-box
              // border-bottom 2px solid red
              border-top none
              border-left none
              border-right none
              outline none

            .phone_code
              position absolute
              width 70px
              height 39px
              top 8px
              z-index 1
              border-right 1px solid #E7E7E7
              display flex
              justify-content space-around
              align-items center
              left: -4px
            
      .login_message
        position relative
        margin-top 16px
        height 48px
        font-size 14px
        padding-left 20px
        .pwd
          position absolute
          width 16px
          height 16px
          right 99px
          top 17px
          z-index 2  
        >.input_code  
            width 315px
            height 48px
            margin-left 50%
            transform translateX(-50%)
            border none
            border-bottom 1px solid #e7e7e7
            outline none
            font-size 14px

          .J_get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #FF1C75
                font-size 14px
                background transparent
          #left-line
              position absolute
              right 50%
              top 47px
              bottom 2px
              height 1px
              width 0
              background #FF2869
              transition all 0.2s
          .right-line
            position absolute
            top 47px
            left 50%
            width 0
            bottom 2px
            transition all 0.2s
            background #FF2869
            height 1px
          .input_code:focus+.J_get_verification+.right-line+#left-line
            width 150px
          .input_code:focus+.J_get_verification+.right-line
            width 167px


      .login_message_on      
        position relative
        margin-top 16px
        height 48px
        font-size 14px
        padding-left 20px
        .info
          position absolute
          width 16px
          height 16px
          right 35px
          top 20px
          z-index 2
        .psd_eyes
          position absolute
          width 20px
          height 22px
          right 5px
          top 17px
          z-index 2  
        >.input_code  
            width 315px
            height 48px
            margin-left 50%
            transform translateX(-50%)
            border none
            border-bottom 1px solid #e7e7e7
            outline none
            font-size 14px

          .J_get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #FF1C75
                font-size 14px
                background transparent
          #left-line
              position absolute
              right 50%
              top 47px
              bottom 2px
              height 1px
              width 0
              background #FF2869
              transition all 0.2s
          .right-line
            position absolute
            top 47px
            left 50%
            width 0
            bottom 2px
            transition all 0.2s
            background #FF2869
            height 1px
          .input_code:focus+.right-line+#left-line
            width 150px
          .input_code:focus+.right-line
            width 167px
      
      .J_login_submit
        padding-left -20px
        display block
        width 100%
        height 42px
        margin-top 30px
        margin-left 6px
        border-radius 4px
        background #4cd96f
        color #fff
        text-align center
        font-size 16px
        line-height 42px
        border 0
        background: linear-gradient(to right,#FF4AAE,#FF1369)
  .J_login_header_title
    padding-top 8px
    margin-left 15px
    width 335px
    text-align center
    display flex
    white-space nowrap
    box-sizing border-box

    >a
      font-size 12px
      padding-bottom 4px

      &:first-child
        margin-right 40px
        
      &.on
        color gray
    .newRigest
      margin-left 160px
    .nRigest
      margin-left 100px
  .login_footer
    position absolute
    width 100%
    height 70px
   
    bottom 60px
    span
      position absolute
      left 50%
      transform translateX(-50%)
      font-size 14px
      color #E7E7E7
    img
      width 50px
      height 50px
      position absolute
      left 50%
      bottom 1px
      transform translateX(-50%)     


 
</style>
