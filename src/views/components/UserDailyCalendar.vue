
<template>
  <CRow>
    <CCol md="12">
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" class="card-title mb-0">DailyChart</h4>
              <div class="small text-muted">November 2017 ~ November 2017</div>
            </CCol>
          </CRow>
          <CCard style="height:300px;margin-top:40px">DailyChart가 들어감</CCard>
        </CCardBody>
        <CCardFooter>
          <CRow class="text-center">
            <CCol md sm="12" class="mb-sm-3 mb-0">
              <div class="text-muted">제출수</div>
              <strong>0 (0%)</strong>
              <CProgress class="progress-xs mt-2" :precision="1" color="success" :value="0" />
            </CCol>
            <CCol md sm="12" class="mb-sm-3 mb-0 d-md-down-none">
              <div class="text-muted">도전한 문제</div>
              <strong>0 (0%)</strong>
              <CProgress class="progress-xs mt-2" :precision="1" color="info" :value="0" />
            </CCol>
            <CCol md sm="12" class="mb-sm-3 mb-0">
              <div class="text-muted">맞은 문제</div>
              <strong>0 (0%)</strong>
              <CProgress class="progress-xs mt-2" :precision="1" color="warning" :value="0" />
            </CCol>
            <CCol md sm="12" class="mb-sm-3 mb-0">
              <div class="text-muted">성공율</div>
              <strong>0 (0%)</strong>
              <CProgress class="progress-xs mt-2" :precision="1" color="danger" :value="0" />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
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
//
</script>

