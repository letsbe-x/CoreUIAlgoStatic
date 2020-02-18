
<template>
  <CCardBody>
    <CRow>
      <CCol sm="5">
        <h4 id="traffic" class="card-title mb-0">Traffic</h4>
        <div class="small text-muted">November 2017</div>
      </CCol>
      <CCol sm="7" class="d-none d-md-block">
        <CButton color="primary" class="float-right">
          <CIcon name="cil-cloud-download" />
        </CButton>
        <CButtonGroup class="float-right mr-3">
          <CButton
            color="outline-secondary"
            v-for="(value, key) in ['Day', 'Month', 'Year']"
            :key="key"
            class="mx-0"
            :pressed="value === selected ? true : false"
            @click="selected = value"
          >{{value}}</CButton>
        </CButtonGroup>
      </CCol>
    </CRow>
    <MainChartExample style="height:300px;margin-top:40px;" />
  </CCardBody>
</template>

<script>
// import CalHeatMap from "cal-heatmap";
// import { mapState } from "vuex";

// import submitGraph from "@/components/DashBoard/newDoughnut";
// import recordList from "@/components/DashBoard/RecentSuccessRecordList";

// const axios = require("axios");

// export default {
//   components: {
//     // "submit-graph": submitGraph,
//     // "recode-list": recordList
//   },
//   name: "user-calendar",
//   data() {
//     return {
//       dialog: false,
//       cal: null,
//       counter: 0, //date.setMonth(date.getMonth() + months);
//       startDate: new Date(new Date().setMonth(new Date().getMonth() - 6)),
//       endDate: new Date(),
//       submit_history: null,
//       dateData: {},

//       submit_data: [],
//       chartData: {
//         success: 1,
//         fail: 1,
//         total: 2
//       }
//     };
//   },
//   filters: {
//     getFormatDate(date) {
//       var year = date.getFullYear(); //yyyy
//       var month = 1 + date.getMonth(); //M
//       month = month >= 10 ? month : "0" + month; //month 두자리로 저장
//       var day = date.getDate(); //d
//       day = day >= 10 ? day : "0" + day; //day 두자리로 저장
//       // console.log(year);
//       return year + "-" + month + "-" + day;
//     }
//   },
//   computed: {
//     ...mapState("user", ["user_id"]),
//     Reload() {
//       // console.log(this.$store.getters["user/GET_USER_ID"]);
//       return this.$store.getters["user/GET_USER_ID"];
//     },
//     ReloadDialog() {}
//   },
//   watch: {
//     Reload(val) {
//       // console.log("UserChange: ", val);
//       this.setAsync();
//     },
//     ReloadDialog(val) {
//       // console.log("EventChange: ", val);
//     }
//   },
//   mounted() {
//     this.print();
//   },
//   methods: {
//     async setAsync() {
//       this.print();
//     },
//     print() {
//       var $self = this;
//       let url =
//         process.env.baseUrl +
//         "/stastic/dailysubmit/v2/" +
//         this.user_id +
//         "/" +
//         this.startDate.getTime() +
//         "/" +
//         this.endDate.getTime();
//       axios
//         .get(url)
//         .then(response => {
//           response = response.data;

//           this.dateData = response["dateData"];

//           this.submit_history = response.submit_history;

//           var cal = new CalHeatMap();
//           document.getElementById("domainDynamicDimension-a").innerHTML = "";
//           cal.init({
//             start: this.startDate, // January, 1st 2000
//             itemSelector: "#domainDynamicDimension-a",
//             domainDynamicDimension: false,
//             // previousSelector: "#domainDynamicDimension-previous",
//             // nextSelector: "#domainDynamicDimension-next",
//             range: 6,
//             domain: "month",
//             subDomain: "day",
//             cellSize: 20,
//             cellPadding: 5,
//             domainLabelFormat: "%y년 %m월",
//             width: "100%",
//             // height: "auto",
//             data: this.dateData,
//             highlight: ["now"],
//             displayLegend: false,
//             onClick: function(date, nb) {
//               // console.log($self.submit_history);
//               var submit_history = $self.submit_history;
//               $self.dialog = true;
//             }
//           });
//           cal.paint();

//           //  this.dateData =response.dateData;

//           this.submit_history = response.submit_history;
//         })
//         .catch(function(error) {
//           console.log(error);
//         });
//     },
//     getSubmissionInfoArr: function(submission_history) {
//       //submission_history  : 숫자 배열
//       // console.log(submission_history);

//       let url = process.env.baseUrl + "/find/submssion/list/";
//       return axios
//         .post(url, submission_history)
//         .then(response => {
//           return response.data;
//         })
//         .catch(function(error) {
//           console.log(error);
//         });
//     }
//   }
// };
// </script>

