<template>
  <div class="row g-5 mx-5">
    <div class="col-md-3">
      <my-nav-vue />
    </div>
    <div class="col-md-9">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyNavVue from "@/components/MyNav.vue";
export default { components: { MyNavVue } };
</script>

<style></style>
