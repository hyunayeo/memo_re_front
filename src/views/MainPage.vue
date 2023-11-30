<template>
  <!-- 메인화면 -->
  <div class="home">
    <div class="container-xxl p-x5">
      <hr />
      <h1 class="mb-4">Bestsellers</h1>
      <hr />
      <wrap-around-vue />
    </div>

    <div class="container-xxl p-x5">
      <hr />
      <h1 class="mb-4">New books</h1>
      <hr />
      <wrap-around-vue />
    </div>
  </div>
</template>

<script>
import WrapAroundVue from "@/components/WrapAround.vue";

export default {
  components: { WrapAroundVue },
};
</script>

<style></style>
