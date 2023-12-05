<template>
  <div class="container">
    <h1>My Library</h1>
    <wrap-around />
    <wrap-around />
    <wrap-around />
  </div>
</template>

<script>
import WrapAround from "@/components/WrapAround.vue";
export default {
  name: "MyLibrary",
  components: { WrapAround },
};
</script>

<style></style>
