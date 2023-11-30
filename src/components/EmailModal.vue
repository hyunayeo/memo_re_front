<template>
    <!-- 버튼을 눌렀을 때 모달창 : 모달창을 보기 위한 임시 버튼-->
    <button @click="isModalOpen = true" type="button" class="btn btn-primary" data-toggle="modal"
        data-target="#exampleModal">
        중복확인
    </button>

    <div class="modal" v-if="isModalOpen == true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">이메일을 인증하세요.</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- <p class="text-success-emphasis">
                        입력하신 이메일로 인증번호를 발송했습니다. <br>
                        이메일을 확인해주세요.
                    </p> -->
                    <div class="alert alert-dismissible alert-success">
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        <strong>
                            입력하신 이메일로 인증번호를 발송했습니다. <br>
                            이메일을 확인해주세요.
                        </strong>
                    </div>

                    <!-- <div>
                        나중에 input 추가 : 인증번호 입력 칸
                        v-if로 인증이 되었다면, 인증이 틀렸다면 / 색깔 나눈 input 구조 가져오기

                        input밑에 "인증이 완료되었습니다."라는 텍스트 붙이기
                    </div> -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">확인</button>
                    <button @click="isModalOpen = false" type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "EmailModal",
    data() {
        return {
            isModalOpen: false // 나중에 중복확인 버튼을 누르면 모달창이 보이도록 하기
        }
    },
}
</script>

<style></style>