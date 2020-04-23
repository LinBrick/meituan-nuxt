<template>
  <div class="pg-unitive-signup theme--www">
    <header class="header--mini">
      <div class="wrapper cf">
        <!-- <a class="site-logo" href="http://www.meituan.com">美团</a> -->
        <nuxt-link class="site-logo" to="/">
          美团
        </nuxt-link>
        <div class="login-block">
          <span class="tip">已有美团账号？</span>
          <nuxt-link class="btn btn-small login" to="/login">
            登录
          </nuxt-link>
        </div>
      </div>
    </header>
    <div class="content">
      <div class="J-unitive-signup-form">
        <div class="sheet" style="display:block">
          <form>
            <div class="form-field form-field--mobile" :class="{'form-field--error':showMobileError}">
              <label>手机号</label>
              <input v-model="mobile" type="text" class="f-text J-mobile" @focus="inputFocus('mobile')" @blur="inputBlur('mobile')">
              <span v-if="showMobileError" class="inline-tip"><i class="tip-status tip-status--opinfo" />{{ mobileErrMsg }}</span>
              <span v-if="mobilePass" class="inline-tip"><i class="tip-status tip-status--success" /></span>
            </div>
            <div class="form-field form-field--vbtn">
              <label>图片验证码</label>
              <div class="verify-wrapper">
                <input
                  type="button"
                  class="btn-normal btn-mini verify-btn J-verify-btn"
                  :class="{'J-verify-btn btn-disabled':disabled}"
                  :value="getVerifgCodeButtonText"
                  @click="getVerifgCode"
                >
                <span id="J-verify-tip" class="f1 verify-tip">{{ verifyTip }}</span>
              </div>
            </div>
            <div class="form-field form-field--sms" :class="{'form-field--error':showVerifycodeError}">
              <label>短信动态码</label>
              <input v-model="verifycode" type="text" class="f-text J-sms" @focus="inputFocus('verifycode')" @blur="inputBlur('verifycode')">
              <span v-if="showVerifycodeError" class="inline-tip"><i class="tip-status tip-status--opinfo" />{{ verifycodeErrMsg }}</span>
              <span v-if="passwordPass" class="inline-tip"><i class="tip-status tip-status--success" /></span>
            </div>
            <div class="form-field form-field--pwd" :class="{'form-field--error':showPasswordError}">
              <div class="pw-strength">
                <div id="J-pw-strength__bar" :class="`pw-strength__bar ${passwordIntensity}`" />
                <div class="pw-strength__letter">
                  <span class="pw-strength__label">弱</span>
                  <span class="pw-strength__label">中</span>
                  <span class="pw-strength__label pw-strength__label--noborder">强</span>
                </div>
              </div>
              <label>创建密码</label>
              <input v-model="password" type="password" class="f-text J-pwd" @focus="inputFocus('password')" @blur="inputBlur('password')">
              <span v-if="showPasswordError" class="inline-tip"><i class="tip-status tip-status--opinfo" />{{ passwordErrMsg }}</span>
              <span v-if="passwordPass" class="inline-tip"><i class="tip-status tip-status--success" /></span>
            </div>
            <div class="form-field form-field--pwd2" :class="{'form-field--error':showPassword2Error}">
              <label>确认密码</label>
              <input v-model="password2" type="password" class="f-text J-pwd2" @focus="inputFocus('password2')" @blur="inputBlur('password2')">
              <span v-if="showPassword2Error" class="inline-tip"><i class="tip-status tip-status--opinfo" />{{ password2ErrMsg }}</span>
              <span v-if="password2Pass" class="inline-tip"><i class="tip-status tip-status--success" /></span>
            </div>
            <div class="slider-verify-wrapper" style="display:none">
              <div class="slider-verify-pop-bg" />
              <div id="slider-verify" />
            </div>
            <div class="form-field">
              <input type="button" class="btn" value="同意以下协议并注册" @click="actionRegister">
            </div>
          </form>
        </div>
      </div>
      <div class="term">
        <a class="f1" href="#" target="_blank">《美团点评用户服务协议》</a>
        <a class="f1" href="#" target="_blank">《美团点评隐私政策》</a>
      </div>
    </div>
    <footer class="footer--mini">
      <p class="copyright">
        &copy;<a class="f1" href="#">meituan.com</a>&nbsp; <a class="f1" target="_blank" href="#">京ICP证070791号</a>&nbsp; <span class="f1">京公网安备11010511025545号</span>
      </p>
    </footer>
  </div>
</template>

<script>
import { validateMobile } from '@/utils/validate'

export default {
  layout: 'blank',
  data () {
    return {
      mobile: '',
      verifycode: '',
      password: '',
      password2: '',
      mobileFocusCount: 0,
      mobileIsFocus: false,
      mobileErrMsg: '',
      verifycodeFocusCount: 0,
      verifycodeIsFocus: false,
      verifycodeErrMsg: '',
      passwordFocusCount: 0,
      passwordIsFocus: false,
      passwordErrMsg: '',
      password2FocusCount: 0,
      password2IsFocus: false,
      password2ErrMsg: '',
      verifyTip: '',
      countverifyCode: 0, // 记录获取验证码次数
      intervalId: null, // 计时器
      intervalTime: null
    }
  },
  computed: {
    showMobileError () {
      return !this.mobileIsFocus && this.mobileErrMsg !== ''
    },
    showVerifycodeError () {
      return !this.verifycodeIsFocus && this.verifycodeErrMsg !== ''
    },
    showPasswordError () {
      return !this.passwordIsFocus && this.passwordErrMsg !== ''
    },
    showPassword2Error () {
      return !this.password2IsFocus && this.password2ErrMsg !== ''
    },
    mobilePass () {
      return this.mobileFocusCount > 0 && !this.mobileIsFocus && this.mobileErrMsg === ''
    },
    verifycodePass () {
      return this.verifycodeFocusCount > 0 && !this.verifycodeIsFocus && this.verifycodeErrMsg === ''
    },
    passwordPass () {
      return this.passwordFocusCount > 0 && !this.passwordIsFocus && this.passwordErrMsg === ''
    },
    password2Pass () {
      return this.password2FocusCount > 0 && !this.password2IsFocus && this.password2ErrMsg === ''
    },
    passwordIntensity () {
      if (this.password.length > 0 && this.password.length <= 5) {
        return 'pw-strength__bar--weak'
      }
      if (this.password.length <= 8) {
        return 'pw-strength__bar--normal'
      }
      if (this.password.length > 8) {
        return 'pw-strength__bar--strong'
      }
      return ''
    },
    getVerifgCodeButtonText () {
      if (this.countverifyCode === 0) {
        return '免费获取短信动态码'
      } else {
        return this.intervalTime ? `重新获取(${this.intervalTime})` : '重新获取'
      }
    },
    disabled () {
      return this.intervalId !== null
    }
  },
  watch: {
    mobile () {
      this.mobileValidate()
    },
    verifycode () {
      this.verifycodeValidate()
    },
    password () {
      this.passwordValidate()
    },
    password2 () {
      this.password2Validate()
    }
  },
  methods: {
    // focus事件
    inputFocus (type) {
      switch (type) {
        case 'mobile':
          this.mobileFocusCount++
          this.mobileIsFocus = true
          break
        case 'verifycode':
          this.verifycodeFocusCount++
          this.mobileIsFocus = true
          break
        case 'password':
          this.passwordFocusCount++
          this.mobileIsFocus = true
          break
        case 'password2':
          this.password2FocusCount++
          this.mobileIsFocus = true
          break
      }
    },
    // blur事件
    inputBlur (type) {
      switch (type) {
        case 'mobile':
          this.mobileIsFocus = false
          this.mobileValidate()
          break
        case 'verifycode':
          this.mobileIsFocus = false
          this.verifycodeValidate()
          break
        case 'password':
          this.mobileIsFocus = false
          this.passwordValidate()
          break
        case 'password2':
          this.mobileIsFocus = false
          this.password2Validate()
          break
      }
    },
    mobileValidate () {
      if (this.mobile === '') {
        this.mobileErrMsg = '请输入您的手机号码'
      } else if (!validateMobile(this.mobile)) {
        this.mobileErrMsg = '请输入正确的手机号'
      } else {
        this.mobileErrMsg = ''
      }
    },
    verifycodeValidate () {
      if (this.verifycode === '') {
        this.verifycodeErrMsg = '请输入短信动态码'
      } else {
        this.verifycodeErrMsg = ''
      }
    },
    passwordValidate () {
      if (this.password === '') {
        this.passwordErrMsg = '请填写密码'
      } else if (this.password.length < 8) {
        this.passwordErrMsg = '密码太短，至少8个字符'
      } else {
        this.passwordErrMsg = ''
      }
    },
    password2Validate () {
      if (this.password2 === '') {
        this.password2ErrMsg = '请再次输入密码'
      } else if (this.password2 !== this.password) {
        this.password2ErrMsg = '两次输入的密码不一致，请重新输入'
      } else {
        this.password2ErrMsg = ''
      }
    },
    // 获取手机验证码
    getVerifgCode () {
      this.mobileValidate()
      if (this.disabled) { return }
      if (this.mobileErrMsg !== '') { return }
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
    // 开始注册
    actionRegister () {
      this.mobileValidate()
      this.verifycodeValidate()
      this.passwordValidate()
      this.password2Validate()
      if (!this.showMobileError && !this.showVerifycodeError && !this.showPasswordError && !this.showPassword2Error) {

      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/meituan-css/register.css';
.form-field--pwd{
    padding-bottom: 27px !important;
}
</style>
