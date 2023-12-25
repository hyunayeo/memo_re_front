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
                      <span class="h1 fw-bold mb-0">계정 로그인</span>
                    </div>
                    <div class="row g-4">
                      <div style="text-align: center">
                        <svg
                          class="bd-placeholder-img rounded-circle login_bg"
                          width="200"
                          height="200"
                          role="img"
                        >
                          <title>Placeholder</title>
                        </svg>
                        <p></p>
                        <h2 class="fw-normal text-danger">♥</h2>
                        <p>지금 메모리와 함께 독서를 시작하세요!</p>
                      </div>
                      <!-- /.col-lg-4 -->

                      <div class="pt-2 mb-4" style="text-align: center">
                        <div
                          class="card border-gray mb-3"
                          style="
                            max-width: 18rem text-center;
                            box-shadow: 1px 1px 1px 1px gray;
                          "
                        >
                          <div
                            class="card-header bg-danger p-2 text-white"
                            style="--bs-bg-opacity: 0.9"
                          >
                            3초만에 시작하기
                          </div>
                          <div class="card-body text-dark">
                            <span class="m-2">
                              <img
                                src="@/assets/google_logo.png"
                                class="rounded-circle"
                                width="50"
                                height="50"
                                alt="profile_image"
                                style="box-shadow: 0px 5px 4px 0px gray"
                                onerror="@/assets/profile_sample.jpg"
                                @click="onClickGoogle()"
                              />
                            </span>
                            &nbsp;
                            <span class="m-2">
                              <img
                                src="@/assets/naver_logo.png"
                                class="rounded-circle"
                                width="50"
                                height="50"
                                alt="profile_image"
                                style="box-shadow: 1px 1px 1px 1px gray"
                                onerror="@/assets/profile_sample.jpg"
                                @click="onClickNaver()"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
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
export default {
  data() {},

  methods: {
    onClickGoogle: function () {
      window.location.href =
        "http://52.78.159.72:8080/oauth2/authorization/google";
    },
    onClickNaver: function () {
      window.location.href =
        "http://52.78.159.72:8080/oauth2/authorization/naver";
    },
  },
};
</script>

<style>
.login_bg {
  background-image: url("@/assets/login_image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
