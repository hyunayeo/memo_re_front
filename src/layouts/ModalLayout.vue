<template>
  <div class="black-bg">
    <div class="white-bg">
      <div class="d-flex justify-content-end align-items-center mb-4">
        <button class="btn-close" @click="closePage"></button>
      </div>
      <password-recovery-modal />
    </div>
  </div>
</template>

<script>
import PasswordRecoveryModalVue from "@/components/PasswordRecoveryModal.vue";
import PasswordRecoveryModal from "@/components/PasswordRecoveryModal.vue";

export default {
  components: { PasswordRecoveryModal },
  name: "ModalLayout",
  data() {
    return { PasswordRecoveryModalVue };
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
/* .black-bg {
  width: 50%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
} */
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  border-style: solid;
}
</style>
