<template>
  <div id="chart" class="bar-style" style="height: 390px"></div>
</template>

<script>
import * as echarts from 'echarts';
import option from '../../assets/data';


export default {
  name: "Chart",
  data() {
    return {
      myChart: null
    }
  },
  mounted() {
    if (!this.myChart)
      this.myChart = echarts.init(document.getElementById('chart'));

    this.myChart.setOption(option);
  }
}
</script>

<style lang="scss">

.bar-style {
  margin: 10px 5px;
  background-color: white;
}
</style>