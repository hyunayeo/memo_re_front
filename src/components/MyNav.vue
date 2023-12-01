<template>
  <h3 class="pb-4 mb-4 border-bottom">My Profile</h3>
  <div class="profile-userpic">
    <img
      src="@/assets/profile_sample.jpg"
      class="rounded-circle"
      width="240"
      height="240"
      alt="profile_image"
      onerror="@/assets/profile_sample.jpg"
    />
  </div>
  <div class="p-4">
    <ol class="list-unstyled mb-0">
      <li>
        <a
          href="#"
          class="h2 fst-italic link-body-emphasis text-decoration-none"
          >Go to memo</a
        >
      </li>
      <li>
        <a
          href="#"
          class="h4 fst-italic link-body-emphasis text-decoration-none border-top"
          >My List</a
        >
      </li>

      <li>
        <a
          href="#"
          class="h4 fst-italic link-body-emphasis text-decoration-none border-top"
          >My Library</a
        >
      </li>
      <li>
        <a
          href="#"
          class="h4 fst-italic link-body-emphasis text-decoration-none border-top"
          >My Wish</a
        >
      </li>
      <li>
        <a
          href="#"
          class="h4 fst-italic link-body-emphasis text-decoration-none border-top"
          >Book Calender</a
        >
      </li>
    </ol>
  </div>

  <div class="p-4">
    <h4 class="fst-italic">ect</h4>
    <ol class="list-unstyled">
      <li><a href="#">정보수정</a></li>
      <li><a href="#">문의하기</a></li>
    </ol>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
