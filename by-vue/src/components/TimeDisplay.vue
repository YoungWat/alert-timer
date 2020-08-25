<template>
  <span class="time-display">{{ fomatedDate }}</span>
</template>

<script>
import utils from "../common/utils"
export default {
  name: "TimeDisplay",
  props: {
    date: {
      default: 0,
    },
  },
  computed: {
    fomatedDate() {
      const info = utils.parseDate(this.date)
      return `${info.flag}${info.h}:${info.m}:${info.s}`
    },
  },
}
</script>
<style></style>
