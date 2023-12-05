<template>
  <div class="vh-100 d-flex justify-content-center align-items-center">
    <div class="col-md-7">
      <div class="border border-3 border-success"></div>
      <div class="card bg-white shadow p-5">
        <div class="mb-4 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="bi bi-check-circle text-success"
            width="75"
            height="75"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
            />
          </svg>
        </div>
        <div class="text-center">
          <h1>탈퇴가 완료되었습니다.</h1>
          <p>
            일주일 뒤 계정이 완전히 삭제됩니다. <br />
            일주일 내로 로그인 할 시, 자동으로 탈퇴가 해제됩니다.
          </p>
          <button class="btn btn-outline-success">Back Home</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "withdrawalComplete",

  data() {
    return {
      isModalOpen: false, // 나중에 중복확인 버튼을 누르면 모달창이 보이도록 하기
    };
  },

  methods: {
    // 아직 사용 X
    modalOpen() {
      this.isModalOpen = !this.isModalOpen;
    },
  },
};
</script>

<style></style>
