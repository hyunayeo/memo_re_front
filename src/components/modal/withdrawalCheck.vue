<template>
  <div
    class="container mb-5"
    style="max-width: 600px; background: white; border-radius: 1rem"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <p class="h2 modal-title mt-4">
            비밀번호를 입력하세요. <br />
            탈퇴가 진행됩니다.
          </p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div class="modal-body">
          <p class="text-danger mt-3">
            탈퇴 시 이 계정의 모든 정보가 삭제됩니다.
          </p>

          <div class="form-group">
            <label
              class="col-form-label col-form-label-lg mt-3"
              for="inputLarge"
            >
              <h3>비밀번호</h3>
            </label>
            <input
              class="form-control form-control-lg mt-2"
              type="password"
              placeholder="비밀번호를 입력하세요."
              id="inputLarge"
            />
          </div>

          <div class="form-group">
            <label
              class="col-form-label col-form-label-lg mt-3"
              for="inputLarge"
            >
              <h3>비밀번호(확인)</h3>
            </label>
            <input
              class="form-control form-control-lg mt-2"
              type="password"
              placeholder="비밀번호 확인"
              id="inputLarge"
            />
          </div>

          <!-- 확인을 눌렀을 때 비밀번호가 일치하지 않다면 -->
          <!-- <p class="text-danger mt-3 mx-5">
                        비밀번호가 일치하지 않습니다.
                    </p> -->
        </div>

        <div class="modal-footer d-flex justify-content-center my-5">
          <!-- 확인을 눌렀을 때 비밀번호가 일치한다면 event(input) -->
          <button type="submit" class="btn btn-primary btn-lg py-3 px-5">
            <h4>확인</h4>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
