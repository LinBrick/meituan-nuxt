import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemnpailer'
import User from '../dbs/models/users'
import Email from '../dbs/config'
import Passport from './utils/passport'
import axios from './utils/axios'

const router = new Router({
  prefix: '/users'
})

const Store = new Redis().client

router.post('/signup', async (ctx) => {
  const { mobilePhone, username, password, code } = ctx.request.body
  if (code) {
    const saveCode = await Store.hget(`nodemail${mobilePhone}`, 'code')
    const saveExpire = await Store.hget(`nodemail${mobilePhone}`, 'expire')
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新尝试'
        }
        return false
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证码'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
  }

  const user = await User.find({
    mobilePhone
  })
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '该手机已注册'
    }
    return
  }
  const nuser = await User.create({
    mobilePhone,
    username,
    password
  })
  if (nuser) {
    const res = await axios.post('/users/signin', {
      mobilePhone,
      password
    })
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
        mobilePhone: res.data.mobilePhone
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'error'
      }
    }
  }
})

router.post('/signin', async (ctx, next) => {
  return Passport.authenticate('local', function (err, user, info, status) {
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    } else if (user) {
      ctx.body = {
        code: -1,
        msg: '登陆成功',
        user
      }
      return ctx.login(user)
    } else {
      ctx.body = {
        code: -1,
        msg: info
      }
    }
  })(ctx, next)
})

router.post('./verify', async (ctx, next) => {
  const mobilePhone = ctx.request.body.mobilePhone
  const saveExpire = await Store.hget(`nodemail:${mobilePhone}`, 'expire')
  if (saveExpire && new Date().getTime() - saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: '验证请求过于频繁，1分钟内1次'
    }
    return false
  }
  const transporter = nodeMailer.createTransport({
    host: Email.smtp.hoost,
    port: 587,
    secure: false,
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })
  const ko = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: 'zhongcheng51@foxmail.com',
    mobilePhone: ctx.request.body.mobilePhone
  }
  const mailOptions = {
    from: `"认证邮件" <${Email.smtp.user}>`,
    to: ko.email,
    subject: '《高仿美团网nuxt实战》注册码',
    html: `您在《高仿美团网nuxt实战》中注册，您的邀请码是${ko.code}`
  }
})
