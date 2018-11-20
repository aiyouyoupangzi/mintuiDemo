<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="inputChange" ref="numBox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {

    };
  },
  props:['max'],
  mounted() {
    mui(".mui-numbox").numbox();
  },
  watch:{
    'max':function(newVal,oldVal){
      mui('.mui-numbox').numbox().setOption('max',newVal);
    }
  },
  methods: {
    inputChange(e) {
        this.$emit('num',this.$refs.numBox.value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>


