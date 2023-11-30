<template>
    <div class="user-profile-container">
        <div class="img-wrapper">
            <img src="@/assets/unsplash.jpg" alt="profile" class="rounded-circle">
        </div>

        <div>
            <h1 class="h1">{{ username }}'s Home</h1>
        </div>

        <div>
            <button type="button" class="btn btn-primary btn-lg">기록하기</button>
        </div>

        <div class="menu">
            <a v-for=" menus in menu " :key="menus" style="display: block;">{{ menus }}</a>
        </div>

        <div class="InfoAndInquirySection">
            <a>정보수정 / 문의하기</a>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "MyPageMenu",
    data() {
        return {
            username: "Kitri", // 추후 동적으로 가져와야 할 값
            menu: ["나의 기록", "나의 서재", "북 캘린더", "Wish"]
        }
    }
}
</script>
  
<style scoped>
/* 이 파일에만 적용되는 스타일 */

/* h1 {
    margin-left: 20px;
    margin-top: 20px;
    font-size: 45px;
    font-weight: bold;
} */

.user-profile-container {
    width: 300px;
}

.img-wrapper {
    position: relative;
    width: 100%;
}

.rounded-circle {
    position: absolute;
    max-width: 100%;
}

.InfoAndInquirySection {
    font-size: small;
}
</style>
