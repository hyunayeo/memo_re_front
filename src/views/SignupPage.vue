<template>
  <div class="signup">
    <h1>회원가입</h1>
  </div>

  <div class="col-md-6 mx-auto">
    <form class="form">
      <div class="form-row">

        <div class="form-group col-md-6">
          <label for="id">아이디</label>
          <input type="email" class="form-control" id="email" placeholder="이메일을 입력하세요.">
          <button type="button" class="button">중복확인</button>
        </div>

        <div class="form-group col-md-6">
          <label for="password">비밀번호</label>
          <input type="password" class="form-control" id="password" placeholder="비밀번호를 입력하세요.">
        </div>

        <div class="form-group col-md-6">
          <label for="password(Check)">비밀번호(확인)</label>
          <input type="password" class="form-control" id="passwordCkeck" placeholder="비밀번호 확인">
        </div>

        <div class="form-group col-md-6">
          <label for="nickname">닉네임</label>
          <input type="text" class="form-control" id="nickname" placeholder="닉네임을 입력하세요.">
        </div>

        <div class="form-group col-md-6">
          <label for="phone">전화번호</label>
          <input type="text" class="form-control" id="phone" placeholder="010 - 0000 - 0000">
        </div>
      </div>
      <button type="submit" class="button">가입하기</button>
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
body {
  background: #483D8b;
}

.signup {
  text-align: center;
  margin-bottom: 15px;
}

.signup h1 {
  color: white;
}

.form {
  background: white;
  border-style: solid;
  border-radius: 1rem;
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
  margin-bottom: 10px;
}

.button {
  text-align: center;
  color: white;
  background: black;
  padding: 7px 30px 7px 30px;
  border-radius: 0.5rem;
}

.button:nth-child(2) {
  margin-top: -30px;
  margin-bottom: 30px;
}
</style>
