/* 手机号码 */
export function validateMobile (str) {
  const reg = /^1[0-9]{10}$/
  return reg.test(str)
}
