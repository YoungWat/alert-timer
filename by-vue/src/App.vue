<template>
  <div id="app">
    <div class="now-time-wrapper">
      <span class="now-time">当前时间</span><TimeDisplay :date="nowDate" />
    </div>
    <div class="time-setter-wrapper">
      <div>设置计时</div>
      <TimeSetter v-model="timerStartDate"
        ><button @click="clickSetBtnHandler">设置</button></TimeSetter
      >
    </div>
    <div class="left-time-wrapper">
      <span class="left-time">剩余时间</span><TimeDisplay :date="leftTimeMs" />
    </div>
  </div>
</template>

<script>
import TimeDisplay from "./components/TimeDisplay.vue"
import TimeSetter from "./components/TimeSetter.vue"
import utils from "./common/utils"

import "./reset.less"
import "./app.less"

let tickCb = null

export default {
  name: "App",
  data() {
    return {
      nowDate: new Date(),
      leftTimeMs: 0,
      timerStartDate: {
        h: 0,
        m: 0,
        s: 0,
      },
    }
  },
  methods: {
    tickNowDate() {
      const tick = () => {
        setTimeout(() => {
          this.nowDate = new Date()
          tickCb && tickCb()
          tick()
        }, 1000)
      }

      tick()
    },
    clickSetBtnHandler() {
      this.leftTimeMs = utils.transInfo2DateMs(this.timerStartDate)
      tickCb = () => {
        this.leftTimeMs = this.leftTimeMs - 1000
      }
    },
  },
  mounted() {
    this.tickNowDate()
  },
  components: {
    TimeDisplay,
    TimeSetter,
  },
}
</script>

<style lang="less"></style>
