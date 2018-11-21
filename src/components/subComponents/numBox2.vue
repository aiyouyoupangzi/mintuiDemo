<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="num" @change="inputChange" ref="numBox" readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {};
  },
  props: ["num", "id"],
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    inputChange(e) {
      this.$store.commit("updateCar", {
        id: this.id,
        count: this.$refs.numBox.value
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>


