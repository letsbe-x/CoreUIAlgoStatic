<template>
  <div>
    <UserRank />
    <!-- <UserInfo /> -->
    <!-- <UserDailyCalendar /> -->
    <!-- <UserSubmitList /> -->
  </div>
</template>

<script>
import UserInfo from "./components/UserInfo";
import UserRank from "./components/UserRank";
import UserDailyCalendar from "./components/UserDailyCalendar";
import UserSubmitList from "./components/UserSubmitList";

export default {
  name: "Dashboard",
  components: {
    UserRank,
    UserInfo,
    UserDailyCalendar,
    UserSubmitList
  },
  data() {
    return {
      selected: "Month",
      dialog: false,
      tableItems: [
        {
          level: { url: "img/avatars/1.jpg", status: "success" },
          title: { name: "A+B", new: true, registered: "분류" },
          language: { name: "USA", flag: "cif-us" },
          time: { value: 50, period: "Jun 11, 2015 - Jul 10, 2015" },
          memory: { value: 50, period: "Jun 11, 2015 - Jul 10, 2015" },
          status: { name: "Mastercard", icon: "cib-cc-mastercard" },
          activity: "10 sec ago"
        }
      ],
      tableFields: [
        { key: "level", _classes: "text-center" },
        { key: "title" },
        { key: "language", _classes: "text-center" },
        { key: "time" },
        { key: "memory" },
        { key: "status", label: "결과", _classes: "text-center" },
        { key: "activity" }
      ]
    };
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
    }
  }
};
</script>
