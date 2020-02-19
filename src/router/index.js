import Vue from "vue";
import Router from "vue-router";
// @TODO : action으로 변경
import axios from "axios";
const _SERVER = "http://13.125.147.223:8080";
// Containers
const TheContainer = () => import("@/containers/TheContainer");

// Views
const Search = () => import("@/views/Search");
const Dashboard = () => import("@/views/Dashboard");
const Feedback = () => import("@/views/FeedbackPage");
const Recommend = () => import("@/views/RecommendAlgo");

// Views - Icons
// const CoreUIIcons = () => import("@/views/icons/CoreUIIcons");
// const Brands = () => import("@/views/icons/Brands");
// const Flags = () => import("@/views/icons/Flags");

// // Views - Notifications
// const Alerts = () => import("@/views/notifications/Alerts");
// const Badges = () => import("@/views/notifications/Badges");
// const Modals = () => import("@/views/notifications/Modals");

// Views - Pages
const Page404 = () => import("@/views/pages/Page404");
const Page500 = () => import("@/views/pages/Page500");
const Login = () => import("@/views/pages/Login");
const Register = () => import("@/views/pages/Register");

// // Users
// const Users = () => import("@/views/users/Users");
// const User = () => import("@/views/users/User");

Vue.use(Router);

export default new Router({
  mode: "hash", // https://router.vuejs.org/api/#mode
  // mode: "history",
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),
  beforeEnter: function(to, from, next) {
    // 인증 값 검증 로직 추가
    console.warn(to);
    console.warn(from);
    console.warn(next);
    next("/");
  }
});

function configRoutes() {
  return [
    {
      path: "/",
      name: "Search",
      component: Search
    },
    {
      path: "/:user_id",
      redirect: "/:user_id/dashboard",
      name: "Home",
      beforeEnter: function(to, from, next) {
        // 인증 값 검증 로직 추가
        let user_id = to.params.user_id;
        let flag = axios
          .get(`${_SERVER}/isUser/${user_id}`)
          .then(res => res.data);
        if (flag) next("/");
        else next();
      },
      component: TheContainer,
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard,
          props: true
        },
        {
          path: "feedback",
          name: "Feedback",
          component: Feedback,
          props: true
        },
        {
          path: "Recommend",
          name: "Recommend",
          component: Recommend,
          props: true
        }
      ]
    },
    {
      path: "/pages",
      redirect: "/pages/404",
      name: "Pages",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "404",
          name: "Page404",
          component: Page404
        },
        {
          path: "500",
          name: "Page500",
          component: Page500
        },
        {
          path: "login",
          name: "Login",
          component: Login
        },
        {
          path: "register",
          name: "Register",
          component: Register
        }
      ]
    }
  ];
}
