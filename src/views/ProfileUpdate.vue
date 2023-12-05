<template>
  <section class="vh-90" style="background-color: 'white'">
    <div class="container py-5 h-100">
      <div
        class="d-flex flex-row justify-content-center align-items-center h-100"
      >
        <div class="col-md-8 col-lg-8">
          <div class="card border-white" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="card-body text-black">
                <form>
                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i
                      class="fas fa-cubes fa-2x me-3"
                      style="color: #ff6219"
                    ></i>
                    <span class="h1 fw-bold mb-0">회원 정보수정</span>
                  </div>

                  <p>&nbsp;&nbsp;</p>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example17"
                      >이메일</label
                    >
                    <input
                      type="email"
                      id="email"
                      class="form-control form-control-lg"
                    />
                  </div>

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
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example27"
                      >전화번호</label
                    >
                    <input
                      type="text"
                      id="ph"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label for="formFileLg" class="form-label"
                      >프로필 사진</label
                    >
                    <input
                      class="form-control form-control-lg"
                      id="formFileLg"
                      type="file"
                    />
                  </div>

                  <div class="row justify-content-end">
                    <div class="col-auto">
                      <p class="text-danger" @click="showModal = true">
                        <a>탈퇴하기</a>
                      </p>
                    </div>
                  </div>
                  <modal-layout
                    v-if="showModal"
                    :option="option"
                    @close="showModal = false"
                  />

                  <div class="pt-2 mb-4" style="text-align: center">
                    <button type="button" class="btn btn-dark btn-lg py-2 px-5">
                      <h3>저장</h3>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ModalLayout from "@/layouts/ModalLayout.vue";

export default {
  data() {
    return { showModal: false, option: "leave" };
  },
  components: { ModalLayout },
};
</script>

<style></style>
