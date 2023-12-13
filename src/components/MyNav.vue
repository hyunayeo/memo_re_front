<template>
  <a
    class="blog-header-logo text-body-emphasis text-decoration-none"
    href="/mypage"
    >My Profile</a
  >
  <div class="profile-userpic">
    <img
      :src="this.picture"
      class="rounded-circle"
      width="200"
      height="200"
      alt="profile_image"
      onerror="@/assets/profile_sample.jpg"
    />
  </div>
  <div class="p-4 border-right">
    <ol class="list-unstyled mb-0">
      <li>
        <a
          href="/article/insert"
          class="h2 fst-italic link-body-emphasis text-decoration-none"
          >Go to memo</a
        >
      </li>
      <li>
        <a
          @click="this.$router.push({ path: `/mypage/record` })"
          class="h4 fst-italic link-body-emphasis text-decoration-none border-top"
          >My Record</a
        >
      </li>

      <li>
        <a
          @click="this.$router.push({ path: `/mypage/library` })"
          class="h4 fst-italic link-body-emphasis text-decoration-none border-top"
          >My Library</a
        >
      </li>
      <li>
        <a
          @click="this.$router.push({ path: `/mypage/calender` })"
          class="h4 fst-italic link-body-emphasis text-decoration-none border-top"
          >Book Calender</a
        >
      </li>
    </ol>
  </div>

  <div class="p-4">
    <h4 class="fst-italic">ect</h4>
    <ol class="list-unstyled">
      <li><a href="/mypage/update">정보수정</a></li>
      <li><a href="#">문의하기</a></li>
    </ol>
  </div>
</template>

<script>
export default {
  props: { picture: String },
};
</script>

<style></style>
