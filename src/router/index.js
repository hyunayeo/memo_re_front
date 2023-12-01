import MainPage from "@/views/MainPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SignupPage from "@/views/SignupPage.vue";
import MyPage from "@/views/MyPage.vue";
import MyRecord from "@/views/MyRecord.vue";
import MyCalender from "@/views/MyCalender";
import SearchPage from "@/views/SearchPage.vue";
import BookDetail from "@/views/BookDetail.vue";
import ArticleDetail from "@/views/ArticleDetail.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupPage,
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: MyPage,
  },
  {
    path: "/search",
    name: "SearchPage",
    component: SearchPage,
  },
  {
    path: "/book",
    name: "BookDetail",
    component: BookDetail,
  },
  {
    path: "/article",
    name: "ArticleDetail",
    component: ArticleDetail,
  },
  {
    path: "/myrecord",
    name: "MyRecord",
    component: MyRecord,
  },
  {
    path: "/mycalender",
    name: "MyCalender",
    component: MyCalender,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
