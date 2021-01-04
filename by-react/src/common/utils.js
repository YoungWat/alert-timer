const msSecondsS = 1000
const msSecondsM = msSecondsS * 60
const msSecondsH = msSecondsM * 60

const utils = {
  transInfo2DateMs: (info = { h: 0, m: 0, s: 0 }) => {
    return info.h * msSecondsH + info.m * msSecondsM + info.s * msSecondsS
  },
  // 时间信息转中文
  transInfo2Str: (info = { h: 0, m: 0, s: 0 }) => {
    const cnMap = {
      h: "小时",
      m: "分钟",
      s: "秒",
    }

    let str = ""

    for (let k in cnMap) {
      !!info[k] && (str += `${info[k]}${cnMap[k]}`)
    }

    if (!str) {
      str = "0时0分0秒"
    }

    return str
  },
  // 时间信息格式化
  formateInfo: (info) => {
    return {
      ...{
        h: 0,
        m: 0,
        s: 0,
      },
      ...info,
    }
  },
  formateDate: (date) => {
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
  transMs2Date: (mseconds, isPad) => {
    const parseNumber = (n) => {
      return isPad ? utils.pad(parseInt(n)) : parseInt(n)
    }

    let isNeg = mseconds < 0

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
  parseDate(v, isPad) {
    return v instanceof Date
      ? { ...utils.formateDate(v), ...{ flag: "" } }
      : utils.transMs2Date(v, isPad)
  },
  pad: (numberStr, len = 2) => {
    const zeroStr = "0".repeat(len - 1)
    // const matchNumber = Number(1 + zeroStr)
    return String(numberStr).length < len ? `${zeroStr}${numberStr}` : numberStr
  },
}
export default utils
