<template>
  <div class="black-bg">
    <div class="white-bg">
      <div class="d-flex justify-content-end align-items-center mb-4">
        <button class="btn-close" @click="closePage"></button>
      </div>
      <find-password v-if="option == 'pw'" />
      <find-email v-if="option == 'id'" />
      <leave-check v-if="option == 'leave'" />
    </div>
  </div>
</template>

<script>
import FindPassword from "@/components/modal/FindPassword.vue";
import FindEmail from "@/components/modal/FindEmail.vue";
import LeaveCheck from "@/components/modal/LeaveCheck.vue";

export default {
  components: { FindPassword, FindEmail, LeaveCheck },
  props: {
    option: String,
  },
  name: "ModalLayout",
  data() {
    return {
      conform: false,
    };
  },
  methods: {
    closePage() {
      this.$emit("close");
    },
  },
};
</script>
<style>
.black-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 10px;
  z-index: 10040;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  border-style: solid;
}
</style>
