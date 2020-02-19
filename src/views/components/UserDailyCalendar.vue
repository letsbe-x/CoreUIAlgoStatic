
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
          <!--<CCard class="text-center" style="height:300px;margin-top:50px">
            <div style="text-align:center;"  id="domainDynamicDimension-a"></div>
          -->
          <v-bottom-sheet v-model="sheet" inset scrollable>
            <v-sheet class="text-center">
              <v-btn class="mt-6" text color="error" @click="sheet = !sheet">close</v-btn>

              <v-card style="height: 500px;" class="my-3">
                <UserSubmitList :dailyData="clicked_day_data"></UserSubmitList>
              </v-card>
            </v-sheet>
          </v-bottom-sheet>

          <div style="text-align:center;" id="domainDynamicDimension-a"></div>
        </CCardBody>
        <CCardFooter>
          <CRow class="text-center">
            <CCol md sm="12" class="mb-sm-2 mb-0">
              <div class="text-muted">제출수</div>
              <strong>29.703 Users (40%)</strong>
              <CProgress class="progress-xs mt-2" :precision="1" color="success" :value="40" />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
              <div class="text-muted">성공률</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress class="progress-xs mt-2" :precision="1" color="info" :value="20" />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
              <div class="text-muted">맞은문제</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress class="progress-xs mt-2" :precision="1" color="warning" :value="60" />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
              <div class="text-muted">시도했지만 못푼문제</div>
              <strong>22.123 Users (80%)</strong>
              <CProgress class="progress-xs mt-2" :precision="1" color="danger" :value="80" />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
              <div class="text-muted">ㅇㅇㅇ</div>
              <strong>Average Rate (40.15%)</strong>
              <CProgress class="progress-xs mt-2" :precision="1" :value="40" />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>


<script>
import CalHeatMap from "cal-heatmap";
import { mapState } from "vuex";
import UserSubmitList from "@/views/components/UserSubmitList.vue";

const axios = require("axios");

export default {
  components: {
    UserSubmitList: UserSubmitList
    // "submit-graph": submitGraph,
    // "recode-list": recordList
  },
  name: "user-calendar",
  data() {
    return {
      clicked_day_data: [],
      user_id: "sdm821",
      sheet: false,
      dialog: false,
      cal: null,
      counter: 0, //date.setMonth(date.getMonth() + months);
      startDate: new Date(new Date().setMonth(new Date().getMonth() - 6)),
      endDate: new Date(),
      submit_history: null,
      dateData: {},

      submit_data: [],
      chartData: {
        success: 1,
        fail: 1,
        total: 2
      }
    };
  },
  filters: {
    getFormatDate(date) {
      var year = date.getFullYear(); //yyyy
      var month = 1 + date.getMonth(); //M
      month = month >= 10 ? month : "0" + month; //month 두자리로 저장
      var day = date.getDate(); //d
      day = day >= 10 ? day : "0" + day; //day 두자리로 저장
      // console.log(year);
      return year + "-" + month + "-" + day;
    }
  },

  watch: {
    user_id: {
      deep: true,
      handler() {
        this.print();
      }
    }
  },
  mounted() {
    this.print();
  },
  methods: {
    async setAsync() {
      this.print();
    },
    print() {
      var $self = this;
      let url =
        "http://localhost:8080/stastic/dailysubmit/v2/" +
        this.user_id +
        "/" +
        this.startDate.getTime() +
        "/" +
        this.endDate.getTime();
      axios
        .get(url)
        .then(response => {
          response = response.data;

          this.dateData = response["dateData"];

          this.submit_history = response.submit_history;

          var cal = new CalHeatMap();
          document.getElementById("domainDynamicDimension-a").innerHTML = "";
          cal.init({
            start: this.startDate, // January, 1st 2000
            itemSelector: "#domainDynamicDimension-a",
            domainDynamicDimension: false,
            // previousSelector: "#domainDynamicDimension-previous",
            // nextSelector: "#domainDynamicDimension-next",
            range: 7,
            domain: "month",
            subDomain: "day",
            cellSize: 20,
            cellPadding: 5,
            domainLabelFormat: "%y년 %m월",
            width: "100%",
            // height: "auto",
            data: this.dateData,
            highlight: ["now"],
            displayLegend: false,
            onClick: function(date, nb) {
              // console.log($self.submit_history);
              console.log(date);
              $self.sheet = true;
              var submit_history = $self.submit_history;
              console.log("클릭:", submit_history);

              let day_submit_history=[];
              try {
                day_submit_history =submit_history[date.getTime() / 1000 + 32400]["submit_history"];
              } catch (error) {
                day_submit_history=[];
              }

              var res;
              $self
                .getSubmissionInfoArr(
                  day_submit_history
                )
                .then(data => {
                  res = data;
                  console.log("제출기록", res);
                  //console.log(typeof res);

                  $self.clicked_day_data = res;
                });
            }
          });
          cal.paint();

          //  this.dateData =response.dateData;

          this.submit_history = response.submit_history;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getSubmissionInfoArr: function(submission_history) {
      //submission_history  : 숫자 배열
      // console.log(submission_history);

      let url = "http://localhost:8080/find/submssion/list/";
      return axios
        .post(url, submission_history)
        .then(response => {
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
@import "http://cdn.jsdelivr.net/cal-heatmap/3.3.10/cal-heatmap.css";
</style>