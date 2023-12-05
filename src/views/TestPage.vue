<template>
  <div class="home">
    <h1>테스트페이지입니다.</h1>
    <BookSearchAndRegistrationModal />
    <BookRegistrationModal />
  </div>
</template>
  
<script>
import EmailModal from '@/components/EmailModal.vue';
import BookSearchAndRegistrationModal from '@/components/BookSearchAndRegistrationModal.vue';
import BookRegistrationModal from '@/components/BookRegistrationModal.vue';
import PasswordRecoveryModal from '@/components/PasswordRecoveryModal.vue';
import withdrawalModal from '@/components/withdrawalModal.vue';
import withdrawalComplete from '@/components/withdrawalComplete.vue';
export default {
  name: "TestPage",
  
  components: {
    EmailModal,
    BookSearchAndRegistrationModal,
    BookRegistrationModal,
    PasswordRecoveryModal,
    withdrawalModal,
    withdrawalComplete,
  }
};
</script>
  
<style scoped></style>
  