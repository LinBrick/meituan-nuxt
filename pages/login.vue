<template>
  <div class="pg-unitive-login theme--www">
    <header class="header cf">
      <nuxt-link class="site-logo" to="/">
        美团网
      </nuxt-link>
    </header>
    <div class="site-body-wrapper">
      <div class="site-body cf">
        <div class="promotion-banner">
          <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
        </div>
        <div class="login-section">
          <form v-show="isOrdinaryLogin" id="J-normal-form" action="" method="POST" class="form form--stack">
            <div class="validate-info" :style="{visibility:validateInfoVisibility}">
              <i class="tip-status tip-status--opinfo" />
              {{ errMsg }}
            </div>
            <span class="login-type"> <a id="J-mobile-link" href="#" @click="loginTypeSwitch"> 手机动态码登录 <i /> </a> 账号登录 </span>
            <div class="form-field form-field--icon phone-input-wrapper">
              <span class="country-area"> <span class="plus" /><span>86</span> <i class="right-arrow" /> </span>
              <input type="hidden" name="countrycode" value="86">
              <input
                id="login-email"
                v-model="mobileNumber"
                type="text"
                class="f-text phone-input"
                name="email"
                placeholder="手机号"
                maxlength="15"
                @focus="inputFocus"
              >
            </div>
            <div class="form-field form-field--icon pw-input-wrapper">
              <i class="icon icon-password" />
              <input
                id="login-password"
                v-model="password"
                type="password"
                class="f-text pw-input"
                name="password"
                placeholder="密码"
                @focus="inputFocus"
              >
            </div>
            <div class="form-field form-field--auto-login cf">
              <a tabindex="-1" href="#" target="_top" class="forget-password">忘记密码？</a>
            </div>
            <div class="form-field form-field--ops">
              <input type="button" class="btn" name="commit" value="登录" @click="ordinaryLogin">
            </div>
            <p class="signup-guide">
              还没有账号？<nuxt-link to="/register">
                免费注册
              </nuxt-link>
            </p>
          </form>
          <form v-show="!isOrdinaryLogin" id="J-mobile-form" action="" method="POST" class="form form--stack J-wwwtracker-form">
            <div class="validate-info" :style="{visibility:validateInfoVisibility}">
              <i class="tip-status tip-status--opinfo" />
              {{ errMsg }}
            </div>
            <span class="login-type login-type--normal"> <a id="J-normal-link" href="#" @click="loginTypeSwitch"> 普通方式登录 <i /> </a> 账号登录 </span>
            <div class="J-info form-field form-field--icon phone-input-wrapper">
              <span class="country-area"> <span class="plus" /><span>86</span> <i class="right-arrow" /> </span>
              <input type="hidden" name="countrycode" value="86">
              <input
                id="login-mobile"
                v-model="mobileNumber"
                type="text"
                class="f-text phone-input"
                placeholder="手机号"
                maxlength="15"
                @focus="inputFocus"
              >
            </div>
            <div class="form-field form-field--icon">
              <i class="icon icon-password" />
              <input
                id="login-verify-code"
                v-model="verifyCode"
                type="text"
                name="code"
                class="f-text smscode-input"
                autocomplete="off"
                placeholder="动态码"
                @focus="inputFocus"
              >
              <div class="form-field form-field--verify-mobile" style="top:19px;">
                <input
                  type="button"
                  class="btn-normal btn-mini"
                  :class="{'btn-disabled':disabled}"
                  :value="getVerifgCodeButtonText"
                  @click="getVerifgCode"
                >
              </div>
            </div>
            <div class="form-field form-field--info">
              <span id="J-verify-tip" class="verify-tip">{{ verifyTip }}</span>
            </div>
            <div class="form-field form-field--auto-login cf">
              <a tabindex="-1" href="#" target="_top" class="forget-password">忘记密码？</a>
            </div>
            <div class="form-field form-field--ops">
              <input type="hidden" name="origin" value="account-login">
              <input type="hidden" name="csrf" value="ktRtnYMf-Ywt1XeBOD89LCEXD5kPfViKsVA4">
              <input
                type="button"
                class="btn"
                value="登录"
                @click="ordinaryLogin"
              >
            </div>
            <p class="J-treaty-block treaty-block">
              提示：未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意<a id="meituanTos" href="#" class="j-terms" target="_blank">《美团点评用户服务协议》</a><a id="meituanTos" href="#" class="j-terms" target="_blank">《美团点评隐私政策》</a>
            </p>
          </form>
          <div id="mtdp-login-bg" class="mtdp-login-bg" />
          <div id="yodaVerifyRoot" class="yoda-verify" />
          <div class="oauth-wrapper J-oauth-wrapper">
            <h3 class="title-wrapper">
              <span class="title">用合作网站账号登录</span>
            </h3>
            <div class="oauth cf">
              <span id="J-third-tencent" class="oauth__link oauth__link--qq third-login-btn" data-href="/account/connect/tencent" target="_blank" />
              <span id="J-third-sina" class="oauth__link oauth__link--weibo third-login-btn" data-href="/account/connect/sina" target="_blank" />
            </div>
            <i id="thirdLoginRiskpartner" data-riskpartner="0" />
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="site-info-nav cf">
        <ul>
          <li class="first">
            <a rel="nofollow" href="#">关于美团</a>
          </li>
          <li><a rel="nofollow" href="#">加入我们</a></li>
          <li><a rel="nofollow" href="#">商家入驻</a></li>
          <li><a rel="nofollow" href="#">帮助中心</a></li>
          <li class="last">
            <a href="#">美团手机版</a>
          </li>
        </ul>
      </div>
      <div class="copyright">
        <p> &copy;<span>2020</span> <a href="#">美团网团购</a> meituan.com <a href="#" target="_blank">京ICP证070791号</a> 京公网安备1101210502025545号 </p>
      </div>
    </footer>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
import { validateMobile } from '@/utils/validate'
import request from '@/utils/request'

export default {
  layout: 'blank',
  data () {
    return {
      isOrdinaryLogin: true,
      mobileNumber: '',
      password: '',
      verifyCode: '',
      errMsg: '',
      verifyTip: '',
      countverifyCode: 0, // 记录获取验证码次数
      intervalId: null, // 计时器
      intervalTime: null
    }
  },
  computed: {
    validateInfoVisibility () {
      return this.errMsg ? 'visible' : 'hidden'
    },
    getVerifgCodeButtonText () {
      if (this.countverifyCode === 0) {
        return '获取手机动态码'
      } else {
        return this.intervalTime ? `重新获取(${this.intervalTime})` : '重新获取'
      }
    },
    disabled () {
      return this.intervalId !== null
    }
  },
  methods: {
    // 切换登陆方式
    loginTypeSwitch () {
      this.isOrdinaryLogin = !this.isOrdinaryLogin
      this.errMsg = ''
    },
    // 验证表单
    validateInfo () {
      if (!validateMobile(this.mobileNumber)) {
        this.errMsg = '请输入正确的手机号'
        return false
      }
      if (this.isOrdinaryLogin && this.password === '') {
        this.errMsg = '请输入密码'
        return false
      }
      if (!this.isOrdinaryLogin && this.verifyCode === '') {
        this.errMsg = '请输入动态码'
        return false
      }
      return true
    },
    inputFocus () {
      this.errMsg = ''
    },
    // 获取手机验证码
    getVerifgCode () {
      if (this.disabled) { return }
      if (!validateMobile(this.mobileNumber)) {
        this.errMsg = '请输入正确的手机号'
        return
      }
      if (this.intervalId !== null) { return }
      this.verifyTip = '已发送，1分钟后可重新获取'
      this.countverifyCode++
      this.intervalTime = 60
      this.intervalId = setInterval(() => {
        if (--this.intervalTime === 0) {
          clearInterval(this.intervalId)
          this.intervalId = null
          this.verifyTip = ''
        }
      }, 1000)
    },
    // 普通登录
    ordinaryLogin () {
      if (this.validateInfo()) {
        request({
          url: '/users/signin',
          method: 'post',
          data: {
            username: this.mobileNumber,
            password: CryptoJS.MD5(this.password).toString()
          }
        }).then(({ status, data }) => {
          if (status === 200 && data && data.code === 0) {
            window.location.href = '/'
          } else {
            this.errMsg = data.msg
          }
        })
      }
    },
    // 手机验证码登录
    verifyCodeLogin () {
      if (this.validateInfo()) {

      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/meituan-css/login.css';
</style>
