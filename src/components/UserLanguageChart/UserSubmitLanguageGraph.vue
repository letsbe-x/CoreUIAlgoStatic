<template>
  <CRow>
    <CCol md="12">
      <CCard>
        <CCardBody>
          <GChart
            :settings="{packages: ['bar']}"
            :data="chartData"
            :options="chartOptions"
            :createChart="(el, google) => new google.charts.Bar(el)"
            @ready="onChartReady"
          />
        </CCardBody>
        <CCardFooter>
          <!-- 상위 5개 푸터 -->
          <CRow class="text-center">
            <CCol md sm="12" class="mb-sm-2 mb-0">
              <div class="text-muted">{{chartData[1][0]}}</div>
              <strong>{{chartData[1][1]}} (0%)</strong>
              <CProgress class="progress-xs mt-2" :precision="1" color="success" :value="40" />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
              <div class="text-muted">{{chartData[2][0]}}</div>
              <strong>{{chartData[2][1]}} (0%)</strong>
              <CProgress class="progress-xs mt-2" :precision="1" color="info" :value="20" />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
              <div class="text-muted">{{chartData[3][0]}}</div>
              <strong>{{chartData[3][1]}} (0%)</strong>
              <CProgress class="progress-xs mt-2" :precision="1" color="warning" :value="60" />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
              <div class="text-muted">{{chartData[4][0]}}</div>
              <strong>{{chartData[4][1]}} (0%)</strong>
              <CProgress class="progress-xs mt-2" :precision="1" color="danger" :value="80" />
            </CCol>
            <!-- <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
              <div class="text-muted">{{chartData[5][0]}} (0%)</div>
              <strong>{{chartData[5][1]}} (0%)</strong>
              <CProgress class="progress-xs mt-2" :precision="1" :value="40" />
            </CCol> -->
          </CRow>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { GChart } from "vue-google-charts";
import { CChartLine } from "@coreui/vue-chartjs";

//@TODO : SERVER CONFIG HIDE
const _SERVER = "http://13.125.147.223:8080";
const axios = require("axios");
export default {
  name: "UserSubmitLanguageGraph",
  props: {
    user_id: {
      type: String,
      default: "-",
      required: true
    }
  },
  components: {
    GChart,
    CChartLine
  },

  mounted() {
    this.makechart(this.user_id);
  },

  watch: {
    user_id() {
      this.makechart(this.user_id);
    }
  },

  data() {
    return {
      chartsLib: null,
      chartData: null
    };
  },
  computed: {
    chartOptions() {
      if (!this.chartsLib) return null;
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: "",
          subtitle: ""
        },
        bars: "horizontal", // Required for Material Bar Charts.
        hAxis: { format: "decimal" },
        height: 200,
        colors: ["#d95f02", "#1b9e77", "#7570b3","#d95f02", "#1b9e77"],
        maintainAspectRatio: false
      });
    }
  },
  methods: {
    onChartReady(chart, google) {
      this.chartsLib = google;
    },
    makechart: function(user_id) {
      axios
        .get(`${_SERVER}/user/${this.user_id}/getUserLanguage`)
        .then(response => {
          response = response.data;
          this.chartData = ["Language", "count"];
          var chartDT = [];
          chartDT.push(["Language", "count"]);
          //언어에 대해서 2개
          for (var key in response) {
            chartDT.push([key, response[key]]);
          }
          //내림차순
          chartDT.sort((a, b) => b[1] - a[1]);
          console.log(chartDT);
          //상위 5개
          this.chartData = chartDT.slice(0, 6);
          //@TODO : 나중에 언어 통합 처리
        });
    }
  }
};
</script>
