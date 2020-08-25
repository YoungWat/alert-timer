const msSecondsS = 1000
const msSecondsM = msSecondsS * 60
const msSecondsH = msSecondsM * 60

const utils = {
  transInfo2DateMs: (info = { h: 0, m: 0, s: 0 }) => {
    return info.h * msSecondsH + info.m * msSecondsM + info.s * msSecondsS
  },
  formateDate: date => {
    if (date instanceof Date) {
      const h = utils.pad(date.getHours())
      const m = utils.pad(date.getMinutes())
      const s = utils.pad(date.getSeconds())
      return { h, m, s }
    } else {
      return {}
    }
  },
  // 毫秒转时间
  transMs2Date: mseconds => {
    const parseNumber = n => {
      console.log("n ",n)
      return utils.pad(parseInt(n))
    }

    let isNeg = mseconds < 0

    console.log("mseconds ",mseconds)

    mseconds = Math.abs(mseconds)
    
    const h = parseNumber(mseconds / msSecondsH)
    const m = parseNumber((mseconds - h * msSecondsH) / msSecondsM)
    const s = parseNumber(
      (mseconds - h * msSecondsH - m * msSecondsM) / msSecondsS
    )

    return {
      h,
      m,
      s,
      flag: isNeg ? "-" : "",
    }
  },
  parseDate(v) {
    return v instanceof Date
      ? { ...utils.formateDate(v), ...{ flag: "" } }
      : utils.transMs2Date(v)
  },
  pad: (numberStr, len = 2) => {
    const zeroStr = "0".repeat(len - 1)
    const matchNumber = Number(1 + zeroStr)
    return numberStr >= matchNumber ? numberStr : `${zeroStr}${numberStr}`
  },
}
export default utils
