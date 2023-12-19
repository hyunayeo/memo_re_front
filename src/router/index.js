import MainPage from "@/views/MainPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SignupPage from "@/views/SignupPage.vue";
import MyRecord from "@/views/my/MyRecord.vue";
import MyCalender from "@/views/my/MyCalender";
import ProfileUpdate from "@/views/my/ProfileUpdate.vue";
import SearchPage from "@/views/SearchPage.vue";

import LibraryLayout from "@/layouts/LibraryLayout.vue";
import BookDetail from "@/views/book/BookDetail.vue";
import ArticleInsert from "@/views/article/ArticleInsert.vue";
import ArticleUpdate from "@/views/article/ArticleUpdate.vue";
import BookList from "@/views/book/BookList.vue";
import ArticleDetail from "@/views/article/ArticleDetail.vue";
import ArticleList from "@/views/article/ArticleList.vue";
import MyLayout from "@/layouts/MyLayout.vue";
import MyLibrary from "@/views/my/MyLibrary.vue";
import ErrorPage from "@/views/ErrorPage.vue";
import BoardLayout from "@/layouts/BoardLayout";
import AskList from "@/views/ask/AskList.vue";
import AskInsert from "@/views/ask/AskInsert.vue";
import AskUpdate from "@/views/ask/AskUpdate.vue";
import AskDetail from "@/views/ask/AskDetail.vue";
import AskLayout from "@/layouts/AskLayout";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/:pathMatch(.*)*",
    redirect: "/error",
  },
  {
    path: "/error",
    name: "ErrorPage",
    component: ErrorPage,
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
        path: "/book/detail/:bookId",
        name: "BookDetail",
        props: true,
        component: BookDetail,
      },
    ],
  },
  {
    path: "/article",
    name: "BoardLayout",
    component: BoardLayout,
    //redirect: "/article",
    children: [
      {
        path: "/article",
        name: "ArticleList",
        component: ArticleList,
      },
      {
        path: "/article/detail/:articleId",
        name: "ArticleDetail",
        props: true,
        component: ArticleDetail,
      },
      {
        path: "/article/update/:articleId",
        name: "ArticleUpdate",
        component: ArticleUpdate,
      },
      {
        path: "/article/insert",
        name: "ArticleInsert",
        component: ArticleInsert,
      },
    ],
  },
  {
    path: "/ask",
    name: "AskLayout",
    component: AskLayout,
    redirect: "/ask",
    children: [
      {
        path: "/ask",
        name: "AskList",
        component: AskList,
      },
      {
        path: "/ask/detail",
        name: "AskDetail",
        component: AskDetail,
      },
      {
        path: "/ask/update",
        name: "AskUpdate",
        component: AskUpdate,
      },
      {
        path: "/ask/insert",
        name: "AskInsert",
        component: AskInsert,
      },
    ],
  },
  {
    path: "/mypage",
    name: "MyLayout",
    component: MyLayout,
    redirect: "/mypage/library",
    children: [
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
      {
        path: "/mypage/update",
        name: "ProfileUpdate",
        component: ProfileUpdate,
      },
      {
        path: "/mypage/library",
        name: "MyLibrary",
        component: MyLibrary,
      },
      {
        path: "/mypage/ask",
        name: "AskInsert",
        component: AskInsert,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
