<template>
  <div class="login">
<section class="vh-100" style="background-color: #483d8b;">
  <div class="container py-5 h-100">
    <div class="d-flex flex-row justify-content-center align-items-center h-100">
      <div class ="col col-lg-5">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">      
              <div class="card-body text-black">

                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                    <span class="h1 fw-bold mb-0">Memo.re</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">로그인</h5>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example17">이메일 주소</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27">비밀번호</label>
                  </div>

                  <div class="pt-1 mb-4" style="text-align:center">
                    <button class="btn btn-dark btn-lg btn-block" type="button">로그인</button>
                  </div>

                  <div class="mb-3">
                    <div class="form-check" style="text-align:center">
                    <label class="form-check-label" for="dropdownCheck">
                     <input type="checkbox" class="form-check-input" id="dropdownCheck">                    
                     아이디 정보 저장
                     <b> &nbsp; / &nbsp; </b>       
                     <a class="text-muted" href="#!">비밀번호 찾기</a>
                     &nbsp;
                    </label>
                    </div>
                  </div>

                  <p class="mb-5 pb-lg-2" style="text-align:center">Memo.re 회원이 아닌가요? <a href="/signup"
                      style="color: #6B21A8;">지금 가입하세요.</a></p>
                </form>

              </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </div>
</template>
