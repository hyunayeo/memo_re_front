<template>
  <div><main-header-vue /></div>
  <div><nav-bar-vue /></div>
</template>

<script>
import MainHeaderVue from './components/MainHeader.vue';
import NavBarVue from './components/NavBar.vue';

export default {
  name: "App",
  components: {
    MainHeaderVue,
    NavBarVue
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
