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
                      <span class="h1 fw-bold mb-0">회원가입</span>
                    </div>

                    <p>&nbsp;&nbsp;</p>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example17"
                        >이메일 주소</label
                      >
                      <input
                        type="email"
                        id="email"
                        class="form-control form-control-lg"
                      />
                      <button
                        type="button"
                        class="btn btn-dark btn-lg float-end"
                        id="emailCheck"
                        @click="showModal = true"
                      >
                        중복확인
                      </button>
                    </div>
                    <EmailCheck v-if="showModal" @close="showModal = false" />

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example27"
                        >비밀번호</label
                      >
                      <input
                        type="password"
                        id="password1"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example27"
                        >비밀번호 확인</label
                      >
                      <input
                        type="password"
                        id="password2"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example27"
                        >닉네임</label
                      >
                      <input
                        type="text"
                        id="name"
                        class="form-control form-control-lg"
                      />
                      <button
                        type="button"
                        class="btn btn-dark btn-lg float-end d-inline"
                        id="nameCheck"
                      >
                        중복확인
                      </button>
                    </div>

                    <div class="pt-2 mb-4" style="text-align: center">
                      <button type="button" class="btn btn-dark btn-lg">
                        가입하기
                      </button>
                    </div>

                    <p class="mb-5 pb-lg-2" style="text-align: center">
                      이미 Memo.re 회원인가요?
                      <a href="/login" style="color: #6b21a8"
                        >로그인하러 가기</a
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
import EmailCheck from "@/components/modal/EmailCheck.vue";

export default {
  data() {
    return {
      showModal: false,
    };
  },

  methods: {},

  components: { EmailCheck },
};
</script>

<style></style>
