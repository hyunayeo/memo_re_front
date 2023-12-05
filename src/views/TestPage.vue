<template>
  <div class="home">
    <h1>테스트페이지입니다.</h1>
    <BookSearchAndRegistrationModal />
    <BookRegistrationModal />
  </div>

  </template>
  
  <script>
import BookSearchAndRegistrationModal from '@/components/BookSearchAndRegistrationModal.vue';
import BookRegistrationModal from '@/components/BookRegistrationModal.vue';
export default {
    name: "TestPage",
    components: { BookSearchAndRegistrationModal,BookRegistrationModal }
};
  </script>
  
  <style scoped></style>
  