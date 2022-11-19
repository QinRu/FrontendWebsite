<template>
  <q-page>
    <div class="input">
      <q-input
          filled
          v-model="name"
          label="Please enter your name"
          class="inputBox"
      />
      <q-btn label="Submit" type="submit" color="bg-grey-9" flat class="q-ml-sm"/>
    </div>
    <div class="row">
      <div class="col colFirst">
        <div class="display-box">
          <div class="dis-title">Total Following</div>
        </div>
        <div class="display-box">
          <div class="dis-title">Total Followers</div>
        </div>
        <div class="display-box">
          <div class="dis-title">Joined Dated</div>
        </div>
        <div class="display-box">
          <div class="dis-title">Location</div>
        </div>
      </div>
      <div class="col-5 colSecond">
        <div id="chart" style="height: 390px" class="charts"/>
        <div>
          <chart></chart>
        </div>
      </div>
      <div class="col-5 colThird">
        <area-chart></area-chart>
      </div>
    </div>
  </q-page>
</template>

<script>
import * as echarts from 'echarts';
import areaChart from './Components/AreaChart';
import chart from './Components/Chart';

console.log(333);

export default {
  name: "Dashboard",
  components: {
    areaChart,
    chart
  }
}
</script>

<style>
.colFirst {
}

.colSecond {
}

.colThird {
}

.inputBox {
  width: 80%;
}

.input {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}

.charts {
  margin: 10px 5px;
  background-color: white;
}

.display-box {
  background-color: #ffffff;
  margin: 10px 5px;
  height: 190px;
}

.dis-title {
  padding: 5px;
  color: #616161;
  font-size: medium;
}

.dis-value {
  text-align: center;
  line-height: 135px;
  font-size: xx-large;
  font-weight: bold;
  color: #535353;
}
</style>