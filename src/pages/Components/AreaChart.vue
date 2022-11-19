<template>
  <div id="areaChart" class="bar-style" style="height: 390px"></div>
</template>

<script>

import * as echarts from 'echarts';
import {areaChartData as option} from '../../assets/data';

let myChart ; //echarts.init(document.getElementById('areaChart'));

// 指定图表的配置项和数据

//myChart.setOption(option);



export default{
  name: 'area-chart',
  mounted(){
    console.log(document.getElementById('areaChart'));
    myChart = echarts.init(document.getElementById('areaChart'));
    myChart.setOption(option);
  }
}
</script>

<style>

.bar-style {
  margin: 10px 5px;
  background-color: white;
}

</style>