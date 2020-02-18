<template>
  <div>
    <UserRank :user_id="id"/>
    <UserInfo :user_id="id"/>
    <UserDailyCalendar :user_id="id"/>
    <UserSubmitList :user_id="id"/>
  </div>
</template>

<script>
import UserRank from "./components/UserRank";
import UserInfo from "./components/UserInfo";
import UserDailyCalendar from "./components/UserDailyCalendar";
import UserSubmitList from "./components/UserSubmitList";

export default {
  name: "Dashboard",
  props: {
    id: {
      type: String,
      default: '-'
    }
  },
  components: {
    UserRank,
    UserInfo,
    UserDailyCalendar,
    UserSubmitList
  },
};
</script>
