import MainPage from "@/views/MainPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SignupPage from "@/views/SignupPage.vue";
import MyPage from "@/views/MyPage.vue";
import SearchPage from "@/views/SearchPage.vue";
import TestPage from '@/views/TestPage.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/testpage",
    name:"TestPage",
    component: TestPage
  },
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
