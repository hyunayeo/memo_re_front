<template>
    <div class="container">
        <div class="row">

            <h1>문의하기</h1>

            <div class="col-md-4">
                <div class="form-group">
                    <label class="col-form-label col-form-label-lg mt-4 custom-cursor-default-hover" for="inputLarge">문의
                        제목</label>
                    <input class="form-control form-control-lg" type="text" placeholder="문의" id="inputLarge">
                </div>
            </div>

            <div class="col mt-4">
                <div class="text-end mt-5">
                    <button type="button" class="btn btn-primary btn-lg">문의 보내기</button>
                </div>
            </div>

            <div class="form-group">
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
};
</script>

<style></style>
