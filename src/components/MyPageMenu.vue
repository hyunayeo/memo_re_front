<template>
    <div class="user-profile-container mx-2 mt-3">
        <!-- <div class="img-wrappe">
            <img src="@/assets/unsplash.jpg" alt="profile" class="rounded-circle">
        </div> -->
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <img src="@/assets/unsplash.jpg" alt="profile" class="rounded-circle">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 mx-5">

                <div>
                    <p class="h1">{{ username }}'s Home</p>
                </div>

                <div class="col-md-12 mx-4 mt-4 mt-4">
                    <div>
                        <button type="button" class="btn btn-primary btn-lg">
                            <h2 class="col-md-12 py-2 px-2">기록하기</h2>
                        </button>
                    </div>

                    <div class="col-md-12 mx-2 mt-4 mb-3">
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item mb-2">
                                <a class="nav-link" href="#">
                                    <h4>나의 기록</h4>
                                </a>
                            </li>

                            <li class="nav-item mb-2">
                                <a class="nav-link" href="#">
                                    <h4>나의 서재</h4>
                                </a>
                            </li>

                            <li class="nav-item mb-2">
                                <a class="nav-link" href="#">
                                    <h4>북 캘린더</h4>
                                </a>
                            </li>

                            <li class="nav-item mb-2">
                                <a class="nav-link" href="#">
                                    <h4>Wish</h4>
                                </a>
                            </li>

                            <li class="nav-item mb-2">
                                <a class="nav-link" href="#">
                                    <h4>정보수정 / 문의하기</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "MyPageMenu",
    data() {
        return {
            username: "Kitri", // 추후 동적으로 가져와야 할 값
        }
    }
}
</script>
  
<style scoped>
/* 이 파일에만 적용되는 스타일 */

.user-profile-container {
    width: 300px;
    max-width: 100%;
}

/* .img-wrapper {
    position: relative;
    width: 300px;
} */

.rounded-circle {
    width: 110%;
    height: auto;
}
</style>
