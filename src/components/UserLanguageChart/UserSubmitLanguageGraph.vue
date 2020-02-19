<template>
  <div id='app'>
  <GChart
    :settings="{packages: ['bar']}"    
    :data="chartData"
    :options="chartOptions"
    :createChart="(el, google) => new google.charts.Bar(el)"
    @ready="onChartReady"
  />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
const axios = require("axios");
export default {
  name: 'UserSubmitLanguageGraph',
  components: {
    GChart
  },



   mounted(){

      this.makechart(this.userid);

       

  },

  watch: {
      userid(){
         this.makechart(this.userid);
      }
  },

 props: ['userid'],


  data () {
    return {
      chartsLib: null, 
      chartData: null
    };
  },
  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: '',
          subtitle: ''
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: { format: 'decimal' },
        height: 400,
        colors: ['#d95f02', '#1b9e77', '#7570b3']
      })
    }
  },
  methods: {
    onChartReady (chart, google) {
      this.chartsLib = google
    }
    ,
    makechart: function(userid){
       axios
      .get('http://localhost:8080/user/'+ this.userid+  '/getUserLanguage')
      .then(response => {
        // console.log(response)
        // console.log("data length : "+Object.keys(response).length)
        response = response.data;
        this.chartData = ['Language', 'count']
        var chartDT = [];
        chartDT.push(['Language','count'])
        for(var key in response){
          chartDT.push([key,response[key]]);
        }
        this.chartData=chartDT;
      });
    }
  }

  

}
</script>
