<template>
  <!-- 중복확인버튼 이벤트는 회원가입페이지에서 기능만들기 -->
  <div
    class="container mb-5 black-bg"
    style="max-width: 600px; background: white; border-radius: 1rem"
  >
    <div class="modal-dialog white-bg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title mt-5">이메일을 인증하세요.</h1>
          <div class="d-flex justify-content-end align-items-center mb-4">
            <div class="btn-close" @click="closePage"></div>
          </div>
        </div>

        <div class="modal-body">
          <div class="alert alert-dismissible alert-success mt-3">
            <!-- 중복확인을 눌렀을 때 메일이 바로 보내지게 하기 -->
            <strong>
              입력하신 이메일로 인증번호를 발송되었습니다. <br />
              이메일을 확인해주세요.
            </strong>
          </div>

          <div class="form-group">
            <label
              class="col-form-label col-form-label-lg mt-2"
              for="inputLarge"
            >
              <h3>인증번호 입력</h3>
            </label>
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="인증번호"
              id="inputLarge"
            />
          </div>

          <!-- 인증번호가 일치한다면 기본 input 숨기고 이게 보여져야 함-->
          <!-- <div class="form-group has-success">
                        <label class="form-label mt-4" for="inputValid"></label>
                        <input type="text" value="correct value" class="form-control is-valid" id="inputValid">
                        <div class="valid-feedback">Success! 인증이 완료되었습니다.</div>
                    </div> -->

          <!-- 인증번호가 일치하지 않다면 기본 input 숨기고 이게 보여져야 함-->
          <!-- <div class="form-group has-danger">
                        <label class="form-label mt-4" for="inputInvalid"></label>
                        <input type="text" value="wrong value" class="form-control is-invalid" id="inputInvalid">
                        <div class="invalid-feedback">Sorry, 인증번호가 일치하지 않습니다.</div>
                    </div> -->
        </div>

        <div class="modal-footer d-flex justify-content-center my-5">
          <!-- 확인을 눌렀다면 인증확인 여부 표시 event(input) -->
          <button type="button" class="btn btn-primary btn-lg py-3 px-5">
            <h4>확인</h4>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmailCheck",
  methods: {
    closePage() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
