<template>
  <div class="container">
    <div class="row g-0">
      <div class="col-md-3">
        <my-nav />
      </div>
      <div class="col-md-9 px-3">
        <h1 class="display-5 mb-3">My History</h1>
        <div class="row">
          <calendar-dot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyNav from "@/components/MyNav.vue";
import CalendarDot from "@/components/CalendarDot.vue";
export default {
  components: { MyNav, CalendarDot },
};
</script>

<style></style>
