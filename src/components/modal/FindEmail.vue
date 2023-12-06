<template>
  <div
    class="container mb-5 black-bg"
    style="max-width: 600px; background: white; border-radius: 1rem"
  >
    <div class="modal-dialog white-bg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <p class="h2 modal-title mt-4">
            가입시 입력한 번호를 입력하세요. <br />
            아이디를 알려드립니다.
          </p>
          <div class="d-flex justify-content-end align-items-center mb-4">
            <button class="btn-close" @click="closePage"></button>
          </div>
        </div>
        <div class="modal-body">
          <div class="form-group" method="post" id="findIdForm">
            <label
              class="col-form-label col-form-label-lg mt-3"
              for="inputLarge"
            >
              <h3>번호입력</h3>
            </label>
            <input
              class="form-control form-control-lg mt-2"
              type="text"
              placeholder="010-0000-0000"
              id="inputLarge"
            />
          </div>

          <!-- 확인을 눌렀을 때, 등록된 이메일이 맞다면 -->
          <!-- <p class="text-success mt-3 mx-5">
                        {{ userEmail }} 으로 임시 비밀번호가 전송되었습니다.
                    </p> -->

          <!-- 확인을 눌렀을 때, 등록되지 않은 이메일이라면 -->
          <!-- <p class="text-danger mt-3 mx-5">
                        등록되지 않은 이메일 입니다. 다시 입력해주세요.
                    </p> -->
        </div>

        <div class="modal-footer d-flex justify-content-center my-5">
          <!-- 확인을 눌렀다면 인증확인 여부 표시 event(input) -->
          <button
            type="submit"
            form="findIdForm"
            class="btn btn-primary btn-lg py-3 px-5"
          >
            <h4>확인</h4>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FindEmail",
  methods: {
    closePage() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
