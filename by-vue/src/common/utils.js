export default {
    formateDate: (date) => {
        return date instanceof Date ? `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` : ""
    },
    // 毫秒转时间
    transMs2Date: (mseconds) => {
        const msSecondsS = 1000
        const msSecondsM = msSecondsS * 60
        const msSecondsH = msSecondsM * 60

        const pInt = parseInt
        const res = `${pInt(msSecondsH)}:${pInt(msSecondsM)}:${pInt(msSecondsS)}`
        return isNaN(res) ? "" : res
    }
}