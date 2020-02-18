<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="info" :header="user_info.boj_submission_count" text="제출수">
        <template #default></template>
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            point-hover-background-color="info"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="danger" :header="user_info.solved" text="도전한 문제">
        <template #default></template>
        <template #footer>
          <CChartLineSimple
            class="mt-3"
            style="height:70px"
            background-color="rgba(255,255,255,.2)"
            :data-points="[78, 81, 80, 45, 34, 12, 40]"
            :options="{ elements: { line: { borderWidth: 2.5 }}}"
            point-hover-background-color="warning"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="info" :header="user_info.boj_solved_count" text="맞은문제">
        <template #default></template>
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[1, 18, 9, 17, 34, 22, 11]"
            point-hover-background-color="info"
            :options="{ elements: { line: { tension: 0.00001 }}}"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="warning" header="100%" text="성공율">
        <template #default>
        </template>
        <template #footer>
          <CChartBarSimple
            class="mt-3 mx-3"
            style="height:70px"
            background-color="rgb(250, 152, 152)"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
  </CRow>
</template>

<script>
import { CChartLineSimple, CChartBarSimple } from "../charts/index.js";
import axios from "axios";
export default {
  props: {
    user_id: {
      type: String,
      default: "-"
    }
  },
  name: "UserInfo",
  components: { CChartLineSimple, CChartBarSimple },
  data() {
    return {
      user_info: {
        user_id: "-",
        solved: "0",
        boj_submission_count: "0",
        boj_solved_count: "0"
      }
    };
  },

  mounted() {
    return axios
      .get(`http://13.125.147.223:8080/user/${this.user_id}`)
      .then(res => {
        this.user_info = res.data.data;
        return res.data.dta;
      });
  }
};
</script>
