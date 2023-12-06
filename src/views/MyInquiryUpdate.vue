<template>
    <div class="container">
        <div class="row">

            <h1>문의수정</h1>

            <div class="col-md-4">
                <div class="form-group">
                    <label class="col-form-label col-form-label-lg mt-4 custom-cursor-default-hover" for="inputLarge">문의
                        제목</label>
                    <input class="form-control form-control-lg" type="text" placeholder="문의" id="inputLarge">
                </div>
            </div>

            <div class="col mt-4">
                <div class="text-end mt-5">
                    <!-- 이미 답변완료(true)가 됐다면 수정, 삭제버튼 비활성화 -->
                    <!-- <button type="button" class="btn btn-primary btn-lg mx-2" disabled>수정</button>
                    <button type="button" class="btn btn-outline-primary btn-lg" disabled>삭제</button> -->
                    <button type="button" class="btn btn-primary btn-lg mx-2">수정</button>
                    <button @click="confirmDeletion" type="button" class="btn btn-outline-primary btn-lg">삭제</button>
                </div>
            </div>

            <div class="form-group">
                <!-- 회원이 작성했던 글 데이터 저장해놓은 것을 보여줘야 한다. -->
                <label for="exampleTextarea" class="form-label mt-4">문의 작성</label>
                <textarea class="form-control" id="exampleTextarea" placeholder="문의를 작성하세요." rows="20"></textarea>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {
        // 실수로 삭제버튼 누름을 방지
        confirmDeletion() {
            confirm("정말 삭제하시겠습니까?");
        }
    }
};
</script>

<style></style>
