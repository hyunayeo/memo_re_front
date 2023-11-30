<template>
  <div class="signup">
    <h1>회원가입</h1>
  </div>

  <div class="col-md-6 mx-auto">
    <form class="form">
      <div class="form-row">

        <div class="form-group col-md-6">
          <label for="id" class="large-label">아이디</label>
          <input type="email" class="form-control" id="id" placeholder="이메일을 입력하세요.">
          <button type="button" class="btn btn-dark btn-lg" style = "position: absolute; margin-left: 350px; margin-top: -50px;">중복확인</button>
        </div>

        <div class="form-group col-md-6">
          <label for="password" class="large-label">비밀번호</label>
          <input type="password" class="form-control" id="password" placeholder="비밀번호를 입력하세요.">
        </div>

        <div class="form-group col-md-6">
          <label for="passwordCheck" class="large-label">비밀번호(확인)</label>
          <input type="password" class="form-control" id="passwordCkeck" placeholder="비밀번호 확인">
        </div>

        <div class="form-group col-md-6">
          <label for="nickname" class="large-label">닉네임</label>
          <input type="text" class="form-control" id="nickname" placeholder="닉네임을 입력하세요.">
        </div>

        <div class="form-group col-md-6">
          <label for="phone" class="large-label">전화번호</label>
          <input type="text" class="form-control" id="phone" placeholder="010 - 0000 - 0000">
        </div>
      </div>
      <button type="button" class="btn btn-dark btn-lg" style = "margin-top: -15px; margin-bottom: 30px;">회원가입</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: "color: magenta;",

    }
  },

  methods: {
  },

  components: {
  }
}
</script>

<style>
.signup {
  text-align: center;
  margin-bottom: 15px;
}

.signup h1 {
  color: black;
}

.form {
  background: white;
  border-radius: 1rem;
  /* border-width: ; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-row {
  margin-top: 50px;
  margin-bottom: 50px;
}

.form-control {
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
  font-size: large;
}

.large-label {
  font-size: 22px;
}
</style>
