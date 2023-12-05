<template>
  <div class="container">
    <div class="display-5 link-body-emphasis mb-1"></div>
    <article class="book-info">
      <div class="row">
        <div class="col-auto">
          <div
            class="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative"
          >
            <div class="col-auto d-none d-lg-block">
              <img
                class="bd-placeholder-img"
                src="@/assets/book_sample.jpg"
                width="200"
              />
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <h2 class="display-5 link-body-emphasis mb-1 text-border">
                {{ book.title }}
              </h2>
              <h4>지은이 : {{ book.author }}</h4>
              <h4>출판사 : {{ book.publisher }}</h4>
              <h4 class>출판일 : {{ book.pubdate }}</h4>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <a class="btn btn-sm btn-outline-secondary" href="#">wish ♥</a>
        </div>
      </div>

      <hr />
      <p>
        돈의 속성은 돈의 속성에 대해 열심히 설명한 글로 돈의 속성 속에 진리를
        찾아 떠나는 탐험에 대해 기술하고 있다. 저자 김땡땡씨는 돈의 속성을
        찬양하며 돈과 함께하는 삶을 지향해야한다고 이야기 한다.
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: "BookInfo",
  data() {
    return {
      book: {
        title: "마흔에 읽는 쇼펜하우어",
        author: "강용수",
        publisher: "유노북스",
        pubdate: "20230907",
        discription:
          "★쇼펜하우어 신드롬을 일으킨 화제의 책★\n★교양과 트렌드를 망라한 ‘마흔에 읽는’ 철학서★\n\n‘쇼펜하우어 신드롬’을 일으킨 화제의 책\n마흔의 삶에 지혜를 주는 쇼펜하우어의 30가지 조언\n\n2023년 8월 유노북스에서 펴낸 《마흔에 읽는 쇼펜하우어》가 전 서점 종합 베스트셀러 1위에 올랐다. 철학 교양서로는 최초라는 점에서 기념비적이다.",
      },
    };
  },
};
</script>

<style></style>
