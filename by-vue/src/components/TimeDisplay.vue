<template>
  <span class="time-display">{{ fomatedDate }}</span>
</template>

<script>
import utils from "../common/utils";
export default {
  name: "TimeDisplay",
  props: {
    date: {},
  },
  computed: {
    fomatedDate() {
      return this.date instanceof Date
        ? utils.formateDate(this.date)
        : utils.transMs2Date(this.date);
    },
  },
};
</script>
<style></style>
