<template>
  <div id="app">
    <page-header />
    <nav-bar />
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- <router-link> will be rendered as an `<a>` tag by default -->
      <!-- <router-link to="/home">Go to home</router-link> -->
      <!-- <router-link to="/about">Go to about</router-link> -->
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
    <page-footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  components: { NavBar, PageHeader, PageFooter },
};
</script>

<style></style>

MainHeader
