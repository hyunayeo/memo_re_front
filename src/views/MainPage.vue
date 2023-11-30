<template>
  <div class="home">
    <h1>여기는 메인화면입니다.</h1>
    <!-- <MyPageMenu /> -->
    <EmailModal />

  </div>
</template>

<script>

// import MyPageMenu from "@/components/MyPageMenu.vue";
import EmailModal from "@/components/EmailModal.vue";

export default {
  components: { EmailModal },
};
</script>
