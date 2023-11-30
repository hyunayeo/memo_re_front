<template>
  <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
    <div class="card rounded shadow-sm border-0" style="width: 200px">
      <img class="card-img-top mx-auto mb-3" :src="cover" alt="No image" />
      <div class="card-body p-4">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ content }}
        </p>
        <a href="#" class="btn btn-primary">보러가기</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  data() {
    return {
      title: "애국가",
      content:
        "애국가의 자취는 조선 후기 개화기와 갑오개혁 직후까지 올라간다. 1896년 당시 독립문 정초식에서 배재학당 학생들에 의해 그 유명한 스코틀랜드 민요 올드 랭 사인의 ...",
      cover:
        "https://image.aladin.co.kr/product/32969/37/cover/8920048789_1.jpg",
    };
  },
};
</script>

<style></style>
