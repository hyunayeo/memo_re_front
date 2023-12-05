<template>
  <div
    class="container mb-5"
    style="max-width: 600px; background: white; border-radius: 1rem"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <p class="h2 modal-title mt-4">
            이메일을 입력하세요. <br />
            임시 비밀번호를 전송해드립니다.
          </p>
        </div>

        <div class="modal-body">
          <!-- <div class="alert alert-dismissible alert-success mt-3"> -->
          <!-- 중복확인을 눌렀을 때 메일이 바로 보내지게 하기 -->
          <!-- <strong>
                            입력하신 이메일로 인증번호를 발송되었습니다. <br>
                            이메일을 확인해주세요.
                        </strong>
                    </div> -->

          <div class="form-group">
            <label
              class="col-form-label col-form-label-lg mt-3"
              for="inputLarge"
            >
              <h3>이메일 입력</h3>
            </label>
            <input
              class="form-control form-control-lg mt-2"
              type="email"
              placeholder="이메일"
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
  data() {},
};
</script>

<style></style>
