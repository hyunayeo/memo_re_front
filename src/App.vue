<template>
  <div id="app">
    <main class="container">
      <div class="container">
        <page-header />
        <nav-bar />
        <router-view></router-view>
        <page-footer class="mt-3" />
      </div>
    </main>
  </div>
  <a href="/article/insert" class="write_btn">
    <img src="/images/icons8-pencil-30.png"
  /></a>
</template>

<script>
import PageHeader from "@/components/main/PageHeader.vue";
import NavBar from "@/components/main/NavBar.vue";
import PageFooter from "@/components/main/PageFooter.vue";

export default {
  components: { NavBar, PageHeader, PageFooter },
  setup() {
    window.addEventListener("error", (event) => {
      alert("error");
      console.log(event);
      history.back();
    });
  },
};
</script>

<style>
@font-face {
  font-family: "Yeongdeok";
  font-weight: 400;
  src: url("@/assets/fonts/Yeongdeok/YeongdeokSea.ttf");
}
* {
  font-family: "Yeongdeok" !important;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
p {
  font-size: 20px;
}

.black-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 10px;
  z-index: 10040;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  border-style: solid;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
  --bd-violet-bg: #712cf9;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #6528e0;
  --bs-btn-hover-border-color: #6528e0;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #5a23c8;
  --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
  z-index: 1500;
}

.bd-mode-toggle .dropdown-menu .active .bi {
  display: block !important;
}
/* stylelint-disable stylistic/selector-list-comma-newline-after */

.blog-header-logo {
  font-family: "Playfair Display", Georgia, "Times New Roman",
    serif /*rtl:Amiri, Georgia, "Times New Roman", serif*/;
  font-size: 2.25rem;
}

.blog-header-logo:hover {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Playfair Display", Georgia, "Times New Roman",
    serif /*rtl:Amiri, Georgia, "Times New Roman", serif*/;
}

.flex-auto {
  flex: 0 0 auto;
}

.h-250 {
  height: 250px;
}
@media (min-width: 768px) {
  .h-md-250 {
    height: 250px;
  }
}

/* Pagination */
.blog-pagination {
  margin-bottom: 4rem;
}

/*
 * Blog posts
 */
.blog-post {
  margin-bottom: 4rem;
}
.blog-post-meta {
  margin-bottom: 1.25rem;
  color: #727272;
}

.write_btn {
  position: fixed;
  bottom: 50px;
  right: 100px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #d3bff1;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  display: inline-block;
}

.write_btn img {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
