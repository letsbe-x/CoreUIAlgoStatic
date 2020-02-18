<template>
  <CCard>
    <CCardBody>
      <!-- {{user_id}} -->
      <!-- {{tableItems}} -->
      <CDataTable
        class="mb-0 table-outline"
        hover
        :items="tableItems"
        :fields="tableFields"
        head-color="light"
        no-sorting
      >
        <td slot="rankimg" class="text-center" slot-scope="{item}">
          <div class="c-avatar">
            <img :src="item.rankimg" class="c-avatar-img" />
          </div>
        </td>
        <td slot="title" slot-scope="{item}">
          <div>{{item.problem_title}}</div>
          <div class="small text-muted">'분류들'</div>
        </td>
        <td slot="language" slot-scope="{item}" class="text-center">
          <div>{{item.language}}</div>
          <!-- <CIcon :name="item.language.flag" height="25" /> -->
        </td>
        <td slot="time" slot-scope="{item}">
          <div class="clearfix">
            <div class="float-left">
              <strong>{{item.time}} ms</strong>
            </div>
            <div class="float-right">
              <small class="text-muted">상위 몇 %</small>
            </div>
          </div>
          <!-- <CProgress class="progress-xs" v-model="item.time.value" :color="color(item.time.value)" /> -->
        </td>
        <td slot="memory" slot-scope="{item}">
          <div class="clearfix">
            <div class="float-left">
              <strong>{{item.memory}} KB</strong>
            </div>
            <div class="float-right">
              <small class="text-muted">상위 몇 %</small>
            </div>
          </div>
          <!-- <CProgress
            class="progress-xs"
            v-model="item.memory.value"
            :color="color(item.memory.value)"
          />-->
        </td>
        <td slot="status" slot-scope="{item}" class="text-center">
          <!-- <CIcon :name="item.status.icon" height="25" /> -->
          <div>임시 : {{item.result}}</div>
        </td>
        <td slot="activity" slot-scope="{item}">
          <!-- <strong>{{item.activity}}</strong> -->
          <strong>{{item.from_now}}</strong>
        </td>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>
import moment from "moment";
import "moment/min/locales";
moment.locale("ko");
import axios from "axios";
const _SERVER = "http://13.125.147.223:8080/";
export default {
  props: {
    user_id: {
      type: String,
      default: "-"
    }
  },
  data() {
    return {
      tableItems: [
        {
          rankimg: "",
          problem_title: "A+B",
          language: "JAVA",
          time: "1",
          memory: "100",
          result: "reactAC",
          from_now: "10 sec ago"
        }
      ],
      tableFields: [
        { key: "rankimg", label: "난이도", _classes: "text-center" },
        { key: "problem_title", label: "제목", _classes: "text-center" },
        { key: "language", _classes: "text-center" },
        { key: "time" },
        { key: "memory" },
        { key: "result", label: "결과", _classes: "text-center" },
        { key: "from_now" }
      ],
      loading: false,
      isfocusable: false,
      ishover: true,
      ispopout: true,
      pageno: 1,
      pagination: null,
      load_btn_label: "더 보기"
    };
  },

  mounted() {
    this.tableItems = [];
    this.search();
    this.getPaginationInfo().then(response => {
      this.pagination = response;
    });
  },

  methods: {
    color(value) {
      let $color;
      if (value <= 25) {
        $color = "info";
      } else if (value > 25 && value <= 50) {
        $color = "success";
      } else if (value > 50 && value <= 75) {
        $color = "warning";
      } else if (value > 75 && value <= 100) {
        $color = "danger";
      }
      return $color;
    },
    getPaginationInfo() {
      let url = _SERVER + "/recentsubmit/list/pagination/" + this.user_id;

      return axios
        .get(url, {
          onDownloadProgress: progressEvent => {
            let percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
          }
        })
        .then(response => {
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    test: function(e) {
      console.log(e);
    },

    loader: function() {
      this.loading = true;
      if (this.pagination.last_page_num == this.pageno) {
        this.loading = false;
        this.load_btn_label = "마지막 페이지입니다";
        return;
      }

      this.pageno++;
      this.search();
      setTimeout(() => (this.loading = false), 1500);
    },

    search: function(mode) {
      if (mode == "search") this.tableItems = [];

      var now = Date.now(0);

      this.getRecentSubmitRecord().then(response => {
        let newRecordArr = response;
        //this.tableItems=   this.tableItems .concat (response);

        newRecordArr.forEach(element => {
          element.rankimg =
            "https://solved.ac/res/tier-small/" + element.level + ".svg";
          if (element.result == "result-ac") {
            element.isresultAccept = true;
          }
          //let d= moment(element.date+'000',"x").fromNow();
          let d = moment(new Date(parseInt(element.date) * 1000)).fromNow();
          element.from_now = d;
          element.date = moment(new Date(parseInt(element.date) * 1000)).format(
            "YYYY-MM-DD HH:mm:ss"
          );
        });

        this.tableItems = this.tableItems.concat(newRecordArr);

        this.getPaginationInfo().then(response => {
          this.pagination = response;
        });
      });
    },

    getRecentSubmitRecord: function() {
      let url =
        _SERVER + "/recentsubmit/list/" + this.user_id + "/" + this.pageno;
      return axios
        .get(url, {
          onDownloadProgress: progressEvent => {
            let percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            //console.log(progressEvent.lengthComputable);
            //console.log(percentCompleted);

            //console.log(progressEvent );
          }
        })
        .then(response => {
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  filters: {
  }
};
</script>

<style>
</style>