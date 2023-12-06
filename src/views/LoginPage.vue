<template>
  <div class="login">
    <section class="vh-90" style="background-color: #ffffff">
      <div class="container py-5 h-100">
        <div
          class="d-flex flex-row justify-content-center align-items-center h-100"
        >
          <div class="col-md-8 col-lg-5">
            <div class="card" style="border-radius: 1rem">
              <div class="row g-0">
                <div class="card-body text-black">
                  <form>
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <i
                        class="fas fa-cubes fa-2x me-3"
                        style="color: #ff6219"
                      ></i>
                      <span class="h1 fw-bold mb-0">로그인</span>
                    </div>

                    <p>&nbsp;&nbsp;</p>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="email">이메일 주소</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="memore@example.com"
                        class="form-control form-control-lg"
                        required
                        autofocus
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="password">비밀번호</label>
                      <input
                        type="password"
                        id="password"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <div class="pt-2 mb-4" style="text-align: center">
                      <button type="button" class="btn btn-dark btn-lg">
                        로그인
                      </button>
                    </div>

                    <div class="mb-3">
                      <div class="form-check" style="text-align: center">
                        <label class="form-check-label" for="dropdownCheck">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="dropdownCheck"
                          />
                          아이디 정보 저장
                        </label>
                        <div class="mt-2">
                          <a class="text-muted" @click="showModalId = true"
                            >아이디 찾기</a
                          >
                          <b> &nbsp; / &nbsp; </b>
                          <a
                            class="text-muted"
                            @click="
                              showModalPw = true;
                              option = 'pw';
                            "
                            >비밀번호 찾기</a
                          >
                        </div>
                      </div>
                    </div>
                    <FindEmail
                      @close="showModalId = false"
                      v-if="showModalId"
                    />
                    <FindPassword
                      @close="showModalPw = false"
                      v-if="showModalPw"
                    />

                    <p class="mb-5 pb-lg-2" style="text-align: center">
                      Memo.re 회원이 아닌가요?
                      <a href="/signup" style="color: #6b21a8"
                        >지금 가입하세요.</a
                      >
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import FindEmail from "@/components/modal/FindEmail.vue";

import FindPassword from "@/components/modal/FindPassword.vue";
export default {
  data() {
    return { showModalId: false, showModalPw: false };
  },
  components: { FindEmail, FindPassword },
};
</script>

<style></style>
