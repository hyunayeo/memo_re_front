import MainPage from "@/views/MainPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SignupPage from "@/views/SignupPage.vue";
import MyPage from "@/views/MyPage.vue";
import MyRecord from "@/views/MyRecord.vue";
import MyCalender from "@/views/MyCalender";
import SearchPage from "@/views/SearchPage.vue";
import TestPage from '@/views/TestPage.vue'
import LibraryLayout from "@/layouts/LibraryLayout.vue";
import BookDetail from "@/views/BookDetail.vue";
import ArticleInsert from "@/views/ArticleInsert.vue";
import ArticleUpdate from "@/views/ArticleUpdate.vue";
import BookList from "@/views/BookList.vue";
import ArticleDetail from "@/views/ArticleDetail.vue";
import ArticleList from "@/views/ArticleList.vue";
import MyLayout from "@/layouts/MyLayout.vue";
import ErrorPage from "@/views/ErrorPage.vue";
import BoardLayout from "@/layouts/BoardLayout";

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
    path: "/search",
    name: "SearchPage",
    component: SearchPage,
  },
  {
    path: "/book",
    name: "LibraryLayout",
    component: LibraryLayout,
    redirect: "/book",
    children: [
      {
        path: "/book",
        name: "BookList",
        component: BookList,
      },
      {
        path: "/book/detail",
        name: "BookDetail",
        component: BookDetail,
      },
    ],
  },
  {
    path: "/articleinsert",
    name: "ArticleInsert",
    component: ArticleInsert,
  },
  {
    path: "/articleupdate",
    name: "ArticleUpdate",
    component: ArticleUpdate,
  },
  {
    path: "/article",
    name: "BoardLayout",
    component: BoardLayout,
    redirect: "/article",
    children: [
      {
        path: "/article",
        name: "ArticleList",
        component: ArticleList,
      },
      {
        path: "/article/detail",
        name: "ArticleDetail",
        component: ArticleDetail,
      },
      {
        path: "/article/update",
        name: "",
        component: ArticleDetail,
      },
    ],
  },
  {
    path: "/error",
    name: "ErrorPage",
    component: ErrorPage,
  },
  {
    path: "/mypage",
    name: "MyLayout",
    component: MyLayout,
    redirect: "/mypage",
    children: [
      {
        path: "/mypage",
        name: "MyPage",
        component: MyPage,
      },
      {
        path: "/mypage/record",
        name: "MyRecord",
        component: MyRecord,
      },
      {
        path: "/mypage/calender",
        name: "MyCalender",
        component: MyCalender,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
